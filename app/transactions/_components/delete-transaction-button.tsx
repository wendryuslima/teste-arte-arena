"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useTransactions } from "@/app/_contexts/transactions-context";
import { toast } from "sonner";

interface DeleteTransactionButtonProps {
  transactionId: string;
  transactionName: string;
}

const DeleteTransactionButton = ({
  transactionId,
  transactionName,
}: DeleteTransactionButtonProps) => {
  const { deleteTransaction } = useTransactions();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    try {
      deleteTransaction(transactionId);
      toast.success("Transação deletada com sucesso");
      setIsOpen(false);
    } catch (error) {
      toast.error("Erro ao deletar transação. Tente novamente");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 size={16} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você deseja realmente deletar essa transação?
          </AlertDialogTitle>
          <AlertDialogDescription>
            A transação <strong>{transactionName}</strong> será permanentemente
            removida. Essa ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTransactionButton;
