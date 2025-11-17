"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Transaction } from "@/app/_types/transaction";
import { formatCurrency } from "@/app/_lib/utils/currency";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_components/_constants/transactions";
import TransactionTypeBadge from "./transaction-type-badge";
import EditTransactionButton from "./edit-transaction-button";
import DeleteTransactionButton from "./delete-transaction-button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => {
      return <TransactionTypeBadge type={row.getValue("type")} />;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => {
      const category = row.getValue("category") as string;
      return (
        <div className="text-sm">
          {
            TRANSACTION_CATEGORY_LABELS[
              category as keyof typeof TRANSACTION_CATEGORY_LABELS
            ]
          }
        </div>
      );
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row }) => {
      const method = row.getValue("paymentMethod") as string;
      return (
        <div className="text-sm">
          {
            TRANSACTION_PAYMENT_METHOD_LABELS[
              method as keyof typeof TRANSACTION_PAYMENT_METHOD_LABELS
            ]
          }
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row }) => {
      const date = row.getValue("date") as Date | string;
      const dateObj = typeof date === "string" ? new Date(date) : date;
      return (
        <div className="text-sm">
          {format(dateObj, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const type = row.original.type;
      const isDeposit = type === "DEPOSIT";
      const isExpense = type === "EXPENSE";

      return (
        <div
          className={`text-sm font-bold ${
            isDeposit
              ? "text-primary"
              : isExpense
                ? "text-destructive"
                : "text-foreground"
          }`}
        >
          {isDeposit ? "+" : isExpense ? "-" : ""}
          {formatCurrency(amount)}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <div className="flex items-center gap-2">
          <EditTransactionButton transaction={transaction} />
          <DeleteTransactionButton
            transactionId={transaction.id}
            transactionName={transaction.name}
          />
        </div>
      );
    },
  },
];
