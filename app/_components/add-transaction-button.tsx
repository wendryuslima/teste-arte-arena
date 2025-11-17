"use client";

import { Button } from "@/app/_components/ui/button";
import { ArrowDownUp } from "lucide-react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  return (
    <UpsertTransactionDialog
      trigger={
        <Button
          className="rounded-full font-bold transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Adicionar nova transação"
        >
          <ArrowDownUp size={16} aria-hidden="true" />
          Adicionar transação
        </Button>
      }
    />
  );
};

export default AddTransactionButton;
