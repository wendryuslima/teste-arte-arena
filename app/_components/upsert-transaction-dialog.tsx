"use client";

import { TransactionForm } from "@/app/_components/forms/transaction-form";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { useTransactions } from "@/app/_contexts/transactions-context";
import { TransactionFormValues } from "@/app/_lib/validations/transaction.schema";
import { Transaction } from "@/app/_types/transaction";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface UpsertTransactionDialogProps {
  trigger?: React.ReactNode;
  transaction?: Transaction;
}

const UpsertTransactionDialog = ({
  trigger,
  transaction,
}: UpsertTransactionDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addTransaction, updateTransaction } = useTransactions();
  const isUpdate = !!transaction;

  const handleSubmit = async (values: TransactionFormValues) => {
    try {
      setIsLoading(true);
      if (isUpdate && transaction) {
        updateTransaction(transaction.id, values);
        toast.success("Transação atualizada com sucesso");
      } else {
        addTransaction(values);
        toast.success("Transação adicionada com sucesso");
      }
      setIsOpen(false);
    } catch (error) {
      toast.error("Erro ao salvar transação. Tente novamente");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className="max-h-[80vh] w-[350px] overflow-y-auto lg:w-[500px] [&::-webkit-scrollbar]:hidden"
        aria-describedby="dialog-description"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2" id="dialog-title">
            {isUpdate ? "Atualizar" : "Adicionar transação"}
            {isLoading && (
              <Loader2
                className="h-4 w-4 animate-spin"
                aria-label="Carregando"
                aria-live="polite"
              />
            )}
          </DialogTitle>
          <DialogDescription id="dialog-description">
            Insira as informações abaixo
          </DialogDescription>
        </DialogHeader>

        <TransactionForm
          transaction={transaction}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        <DialogFooter className="mt-4 gap-2 lg:w-full lg:justify-between">
          <DialogClose asChild>
            <Button
              className="w-full lg:mt-0"
              type="button"
              variant="outline"
              disabled={isLoading}
            >
              Cancelar
            </Button>
          </DialogClose>

          <Button
            type="submit"
            className="p-5"
            variant="default"
            disabled={isLoading}
            onClick={() => {
              const form = document.querySelector("form");
              form?.requestSubmit();
            }}
          >
            {isUpdate ? "Atualizar" : "Adicionar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpsertTransactionDialog;
