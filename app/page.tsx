"use client";

import { useSearchParams } from "next/navigation";
import NavBar from "@/app/_components/nav-bar";
import DashboardHeader from "./_components/dashboard-header";
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
      <div className="flex flex-col gap-6 p-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex w-full items-center justify-between">
            <DashboardHeader />
            <AddTransactionButton />
          </div>
        </div>

        <SummaryCards data={dashboardData} />

        <div className="grid gap-6 lg:grid-cols-[1fr,2fr]">
          <TransactionPieChart data={dashboardData} />
          <ExpensesPerCategory data={dashboardData} />
        </div>
      </div>
    </>
  );
};

export default Home;
