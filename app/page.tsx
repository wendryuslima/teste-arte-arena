"use client";

import { useSearchParams } from "next/navigation";
import NavBar from "@/app/_components/nav-bar";
import DashboardHeader from "./_components/dashboard-header";
import BalanceCard from "./_components/balance-card";
import SummaryCards from "./_components/summary-cards";
import TransactionPieChart from "./_components/transaction-pie-chart";
import ExpensesPerCategory from "./_components/expenses-per-category";
import AddTransactionButton from "@/app/_components/add-transaction-button";
import { getDashboardData } from "./_data/mock-data";

const Home = () => {
  const searchParams = useSearchParams();
  const monthParam = searchParams.get("month");
  const currentMonth = monthParam
    ? parseInt(monthParam)
    : new Date().getMonth() + 1;

  const dashboardData = getDashboardData(currentMonth);

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

export default Home;
