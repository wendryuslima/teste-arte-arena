import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@/types/transaction";

export const TRANSACTION_CATEGORY_LABELS: Record<TransactionCategory, string> =
  {
    [TransactionCategory.HOUSING]: "Moradia",
    [TransactionCategory.TRANSPORTATION]: "Transporte",
    [TransactionCategory.FOOD]: "Alimentação",
    [TransactionCategory.ENTERTAINMENT]: "Lazer",
    [TransactionCategory.HEALTH]: "Saúde",
    [TransactionCategory.UTILITY]: "Utilidades",
    [TransactionCategory.SALARY]: "Salário",
    [TransactionCategory.EDUCATION]: "Educação",
    [TransactionCategory.OTHER]: "Outros",
  };

export const TRANSACTION_PAYMENT_METHOD_LABELS: Record<
  TransactionPaymentMethod,
  string
> = {
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de débito",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência bancária",
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto bancário",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.PIX]: "Pix",
  [TransactionPaymentMethod.OTHER]: "Outros",
};

export const MONTHS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

