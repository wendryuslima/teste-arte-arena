import {
  Transaction,
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
  DashboardData,
} from "@/types/transaction";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    name: "Salário",
    type: TransactionType.DEPOSIT,
    amount: 5000,
    category: TransactionCategory.SALARY,
    date: new Date("2024-11-01"),
    paymentMethod: TransactionPaymentMethod.BANK_TRANSFER,
  },
  {
    id: "2",
    name: "Supermercado",
    type: TransactionType.EXPENSE,
    amount: 350.5,
    category: TransactionCategory.FOOD,
    date: new Date("2024-11-05"),
    paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
  },
  {
    id: "3",
    name: "Investimento em ações",
    type: TransactionType.INVESTMENT,
    amount: 50000,
    category: TransactionCategory.OTHER,
    date: new Date("2024-11-10"),
    paymentMethod: TransactionPaymentMethod.BANK_TRANSFER,
  },
  {
    id: "4",
    name: "Cinema",
    type: TransactionType.EXPENSE,
    amount: 50,
    category: TransactionCategory.ENTERTAINMENT,
    date: new Date("2024-11-12"),
    paymentMethod: TransactionPaymentMethod.DEBIT_CARD,
  },
  {
    id: "5",
    name: "Consulta médica",
    type: TransactionType.EXPENSE,
    amount: 200,
    category: TransactionCategory.HEALTH,
    date: new Date("2024-11-15"),
    paymentMethod: TransactionPaymentMethod.PIX,
  },
  {
    id: "6",
    name: "Restaurante",
    type: TransactionType.EXPENSE,
    amount: 150,
    category: TransactionCategory.FOOD,
    date: new Date("2024-11-18"),
    paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
  },
  {
    id: "7",
    name: "Show",
    type: TransactionType.EXPENSE,
    amount: 300,
    category: TransactionCategory.ENTERTAINMENT,
    date: new Date("2024-11-20"),
    paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
  },
  {
    id: "8",
    name: "Freelance",
    type: TransactionType.DEPOSIT,
    amount: 1000,
    category: TransactionCategory.OTHER,
    date: new Date("2024-11-22"),
    paymentMethod: TransactionPaymentMethod.PIX,
  },
  {
    id: "9",
    name: "Academia",
    type: TransactionType.EXPENSE,
    amount: 100,
    category: TransactionCategory.HEALTH,
    date: new Date("2024-11-25"),
    paymentMethod: TransactionPaymentMethod.DEBIT_CARD,
  },
  {
    id: "10",
    name: "Viagem",
    type: TransactionType.EXPENSE,
    amount: 2000,
    category: TransactionCategory.ENTERTAINMENT,
    date: new Date("2024-11-28"),
    paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
  },
];

const getTransactionsByMonth = (month: number): Transaction[] => {
  return mockTransactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate.getMonth() + 1 === month;
  });
};

export const getDashboardData = (month: number): DashboardData => {
  const transactions = getTransactionsByMonth(month);

  const depositsTotal = transactions
    .filter((t) => t.type === TransactionType.DEPOSIT)
    .reduce((sum, t) => sum + t.amount, 0);

  const expensesTotals = transactions
    .filter((t) => t.type === TransactionType.EXPENSE)
    .reduce((sum, t) => sum + t.amount, 0);

  const investimentTotals = transactions
    .filter((t) => t.type === TransactionType.INVESTMENT)
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = depositsTotal - investimentTotals - expensesTotals;

  const total = depositsTotal + expensesTotals + investimentTotals;

  const typePercentage = {
    [TransactionType.DEPOSIT]: total > 0 ? (depositsTotal / total) * 100 : 0,
    [TransactionType.EXPENSE]: total > 0 ? (expensesTotals / total) * 100 : 0,
    [TransactionType.INVESTMENT]:
      total > 0 ? (investimentTotals / total) * 100 : 0,
  };

  const expenseByCategory = transactions
    .filter((t) => t.type === TransactionType.EXPENSE)
    .reduce(
      (acc, t) => {
        const existing = acc.find((item) => item.category === t.category);
        if (existing) {
          existing.totalAmount += t.amount;
        } else {
          acc.push({
            category: t.category,
            totalAmount: t.amount,
            percentageOfTotal: 0,
          });
        }
        return acc;
      },
      [] as Array<{
        category: TransactionCategory;
        totalAmount: number;
        percentageOfTotal: number;
      }>
    );

  expenseByCategory.forEach((item) => {
    item.percentageOfTotal =
      expensesTotals > 0 ? (item.totalAmount / expensesTotals) * 100 : 0;
  });

  expenseByCategory.sort((a, b) => b.totalAmount - a.totalAmount);

  const lastTransaction = transactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 15);

  return {
    balance,
    depositsTotal,
    investimentTotals,
    expensesTotals,
    typePercentage,
    totalExpensePerCategory: expenseByCategory,
    lastTransaction,
  };
};
