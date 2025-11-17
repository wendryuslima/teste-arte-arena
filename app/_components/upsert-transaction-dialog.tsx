"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/app/_components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Button } from "@/app/_components/ui/button";
import { MoneyInput } from "@/app/_components/money-input";
import { DatePickerDemo } from "@/app/_components/date-picker";
import {
  TRANSACTION_TYPE_OPTIONS,
  TRANSACTION_PAYMENT_METHOD_OPTIONS,
  TRANSACTION_CATEGORY_OPTIONS,
} from "./_constants/transactions";
import {
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
  Transaction,
} from "@/app/_types/transaction";
import { useTransactions } from "@/app/_contexts/transactions-context";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const transactionSchema = z.object({
  name: z.string().trim().min(1, { message: "O nome é obrigatório" }),
  amount: z.number().positive({ message: "O valor deve ser positivo" }),
  type: z.nativeEnum(TransactionType, {
    required_error: "O tipo é obrigatório",
  }),
  category: z.nativeEnum(TransactionCategory, {
    required_error: "A categoria é obrigatória",
  }),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    required_error: "O método de pagamento é obrigatório",
  }),
  date: z.date({ required_error: "A data é obrigatória" }),
});

type TransactionFormValues = z.infer<typeof transactionSchema>;

interface UpsertTransactionDialogProps {
  trigger?: React.ReactNode;
  transaction?: Transaction;
}

const UpsertTransactionDialog = ({
  trigger,
  transaction,
}: UpsertTransactionDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { addTransaction, updateTransaction } = useTransactions();
  const isUpdate = !!transaction;

  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      name: "",
      amount: 50,
      type: TransactionType.EXPENSE,
      category: TransactionCategory.OTHER,
      paymentMethod: TransactionPaymentMethod.CASH,
      date: new Date(),
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (transaction) {
      form.reset({
        name: transaction.name,
        amount: transaction.amount,
        type: transaction.type,
        category: transaction.category,
        paymentMethod: transaction.paymentMethod,
        date: new Date(transaction.date),
      });
    }
  }, [transaction, form]);

  const onSubmit = (values: TransactionFormValues) => {
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
      form.reset();
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
        if (!open) {
          form.reset();
        }
      }}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-h-[80vh] w-[350px] overflow-y-auto lg:w-[500px] [&::-webkit-scrollbar]:hidden">
        <DialogHeader>
          <DialogTitle>
            {isUpdate ? "Atualizar" : "Adicionar transação"}
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          </DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <MoneyInput
                      placeholder="Digite o valor"
                      value={field.value}
                      onValueChange={({ floatValue }) => {
                        field.onChange(floatValue);
                      }}
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_TYPE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Forma de pagamento</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um método de pagamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_PAYMENT_METHOD_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_CATEGORY_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data</FormLabel>
                  <DatePickerDemo
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-4 lg:w-full lg:justify-between">
              <DialogClose asChild>
                <Button
                  className="w-full lg:mt-0"
                  type="button"
                  variant="outline"
                >
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit" className="p-5" variant="default">
                {isUpdate ? "Atualizar" : "Adicionar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpsertTransactionDialog;
