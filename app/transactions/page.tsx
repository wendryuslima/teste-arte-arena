"use client";

import AddTransactionButton from "@/app/_components/add-transaction-button";
import { EmptyTransactions } from "@/app/_components/empty-states";
import NavBar from "@/app/_components/nav-bar";
import { useTransactions } from "@/app/_contexts/transactions-context";
import { columns } from "./_components/columns";
import DataTable from "./_components/data-table";

const TransactionsPage = () => {
  const { transactions } = useTransactions();

  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-6 p-10">
        <div className="flex w-full items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>

        {transactions.length === 0 ? (
          <div className="flex min-h-[calc(100vh-250px)] items-center justify-center lg:min-h-[400px]">
            <EmptyTransactions />
          </div>
        ) : (
          <DataTable columns={columns} data={transactions} />
        )}
      </div>
    </>
  );
};

export default TransactionsPage;
