"use client";

import NavBar from "@/app/_components/nav-bar";
import AddTransactionButton from "@/app/_components/add-transaction-button";
import { useTransactions } from "@/app/_contexts/transactions-context";
import DataTable from "./_components/data-table";
import { columns } from "./_components/columns";

const TransactionsPage = () => {
  const { transactions } = useTransactions();

  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-6 p-10">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>

        <DataTable columns={columns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
