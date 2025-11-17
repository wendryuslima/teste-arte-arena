import {
  DashboardData,
  Transaction,
  TransactionCategory,
  TransactionType,
} from "@/app/_types/transaction";

const getTransactionsByMonth = (
  transactions: Transaction[],
  month: number
): Transaction[] => {
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.getMonth() + 1;
    return transactionMonth === month;
  });
};

export const getDashboardData = (
  transactions: Transaction[],
  month: number
): DashboardData => {
  const filteredTransactions = getTransactionsByMonth(transactions, month);

  const depositsTotal = filteredTransactions
    .filter((t) => t.type === TransactionType.DEPOSIT)
    .reduce((sum, t) => sum + t.amount, 0);

  const expensesTotals = filteredTransactions
    .filter((t) => t.type === TransactionType.EXPENSE)
    .reduce((sum, t) => sum + t.amount, 0);

  const investimentTotals = filteredTransactions
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

  const expenseByCategory = filteredTransactions
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

  const lastTransaction = filteredTransactions
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
