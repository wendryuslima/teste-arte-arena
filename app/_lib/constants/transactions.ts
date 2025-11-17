import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@/app/_types/transaction";

// Fonte única de verdade para labels
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

export const TRANSACTION_TYPE_LABELS: Record<TransactionType, string> = {
  [TransactionType.EXPENSE]: "Despesa",
  [TransactionType.DEPOSIT]: "Depósito",
  [TransactionType.INVESTMENT]: "Investimento",
};

// Derivar arrays de opções dos labels
export const TRANSACTION_TYPE_OPTIONS = Object.entries(
  TRANSACTION_TYPE_LABELS
).map(([value, label]) => ({ value, label }));

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = Object.entries(
  TRANSACTION_PAYMENT_METHOD_LABELS
).map(([value, label]) => ({ value, label }));

export const TRANSACTION_CATEGORY_OPTIONS = Object.entries(
  TRANSACTION_CATEGORY_LABELS
).map(([value, label]) => ({ value, label }));

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

