"use client";

import { useMemo } from "react";
import { useTransactions } from "@/app/_contexts/transactions-context";
import { getDashboardData } from "@/app/_data/mock-data";

export const useDashboardData = (month: number) => {
  const { transactions } = useTransactions();

  return useMemo(
    () => getDashboardData(transactions, month),
    [transactions, month]
  );
};
