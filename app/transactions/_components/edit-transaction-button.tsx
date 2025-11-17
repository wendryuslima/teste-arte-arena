"use client";

import { Button } from "@/app/_components/ui/button";
import { Pencil } from "lucide-react";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@/app/_types/transaction";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  return (
    <UpsertTransactionDialog
      transaction={transaction}
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary"
        >
          <Pencil size={16} />
        </Button>
      }
    />
  );
};

export default EditTransactionButton;
