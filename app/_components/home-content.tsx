"use client";

import { useSearchParams } from "next/navigation";

import AddTransactionButton from "@/app/_components/add-transaction-button";
import NavBar from "@/app/_components/nav-bar";
import { useDashboardData } from "@/app/_hooks/use-dashboard-data";

import BalanceCard from "@/app/_components/balance-card";
import DashboardHeader from "@/app/_components/dashboard-header";
import ExpensesPerCategory from "@/app/_components/expenses-per-category";
import SummaryCards from "@/app/_components/summary-cards";
import TransactionPieChart from "@/app/_components/transaction-pie-chart";

const HomeContent = () => {
  const searchParams = useSearchParams();
  const monthParam = searchParams.get("month");
  const currentMonth = monthParam ? parseInt(monthParam, 10) : 1;

  const dashboardData = useDashboardData(currentMonth);

  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-6 overflow-hidden p-10 lg:overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm font-bold text-gray-600">
            Seu assistente financeiro
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center gap-3">
            <DashboardHeader />
            <AddTransactionButton />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:overflow-hidden">
          <BalanceCard data={dashboardData} />

          <SummaryCards data={dashboardData} />

          <div className="grid gap-6 lg:grid-cols-[1fr,2fr]">
            <TransactionPieChart data={dashboardData} />
            <ExpensesPerCategory data={dashboardData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
