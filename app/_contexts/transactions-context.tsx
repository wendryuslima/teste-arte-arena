"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Transaction } from "@/app/_types/transaction";
import { mockTransactions } from "@/app/_data/mock-data";

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

const loadTransactionsFromStorage = (): Transaction[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return mockTransactions;

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || parsed.length === 0) return mockTransactions;

    return parsed.map((t: Transaction) => ({
      ...t,
      date: new Date(t.date),
    }));
  } catch {
    return mockTransactions;
  }
};

export const TransactionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>(() =>
    loadTransactionsFromStorage()
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (
    transaction: Omit<Transaction, "id" | "createdAt" | "updatedAt">
  ) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const updateTransaction = (id: string, transaction: Partial<Transaction>) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...transaction, updatedAt: new Date() } : t
      )
    );
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

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
