"use client";

import { useTransactions } from "@/app/_contexts/transactions-context";
import { getDashboardData } from "@/app/_lib/services/dashboard";
import { useMemo } from "react";

export const useDashboardData = (month: number) => {
  const { transactions } = useTransactions();

  return useMemo(
    () => getDashboardData(transactions, month),
    [transactions, month]
  );
};
