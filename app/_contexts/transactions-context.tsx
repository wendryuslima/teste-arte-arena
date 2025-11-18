"use client";

import { mockTransactions } from "@/app/_data/mock-data";
import { Transaction } from "@/app/_types/transaction";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface TransactionsContextType {
  transactions: Transaction[];
  addTransaction: (
    transaction: Omit<Transaction, "id" | "createdAt" | "updatedAt">
  ) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
  undefined
);

const STORAGE_KEY = "finance-app-transactions";

const deserializeTransaction = (t: any): Transaction => ({
  ...t,
  date: new Date(t.date),
  createdAt: t.createdAt ? new Date(t.createdAt) : undefined,
  updatedAt: t.updatedAt ? new Date(t.updatedAt) : undefined,
});

const loadTransactionsFromStorage = (): Transaction[] => {
  if (typeof window === "undefined") {
    return mockTransactions;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return mockTransactions;
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return mockTransactions;
    }

    return parsed.map(deserializeTransaction);
  } catch (error) {
    console.error("Erro ao carregar transações do localStorage:", error);
    return mockTransactions;
  }
};

export const TransactionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>(() =>
    typeof window === "undefined"
      ? mockTransactions
      : loadTransactionsFromStorage()
  );

  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadedTransactions = loadTransactionsFromStorage();
      setTransactions(loadedTransactions);
      isInitialLoad.current = false;
    }
  }, []);

  useEffect(() => {
    if (isInitialLoad.current || typeof window === "undefined") {
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    } catch (error) {
      console.error("Erro ao salvar transações no localStorage:", error);
    }
  }, [transactions]);

  const addTransaction = useCallback(
    (transaction: Omit<Transaction, "id" | "createdAt" | "updatedAt">) => {
      const newTransaction: Transaction = {
        ...transaction,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setTransactions((prev) => [...prev, newTransaction]);
    },
    []
  );

  const updateTransaction = useCallback(
    (id: string, transaction: Partial<Transaction>) => {
      setTransactions((prev) =>
        prev.map((t) =>
          t.id === id
            ? {
                ...t,
                ...transaction,
                updatedAt: new Date(),
              }
            : t
        )
      );
    },
    []
  );

  const deleteTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error("useTransactions must be used within TransactionsProvider");
  }
  return context;
};
