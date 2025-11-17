"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  return (
    <UpsertTransactionDialog
      trigger={
        <Button className="rounded-full font-bold">
          <ArrowDownUp size={16} />
          Adicionar transação
        </Button>
      }
    />
  );
};

export default AddTransactionButton;
