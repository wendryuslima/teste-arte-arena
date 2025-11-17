export enum TransactionType {
  DEPOSIT = "DEPOSIT",
  EXPENSE = "EXPENSE",
  INVESTMENT = "INVESTMENT",
}

export enum TransactionCategory {
  HOUSING = "HOUSING",
  TRANSPORTATION = "TRANSPORTATION",
  FOOD = "FOOD",
  ENTERTAINMENT = "ENTERTAINMENT",
  HEALTH = "HEALTH",
  UTILITY = "UTILITY",
  SALARY = "SALARY",
  EDUCATION = "EDUCATION",
  OTHER = "OTHER",
}

export enum TransactionPaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  BANK_TRANSFER = "BANK_TRANSFER",
  BANK_SLIP = "BANK_SLIP",
  CASH = "CASH",
  PIX = "PIX",
  OTHER = "OTHER",
}

export interface Transaction {
  id: string;
  name: string;
  type: TransactionType;
  amount: number;
  category: TransactionCategory;
  date: Date | string;
  paymentMethod: TransactionPaymentMethod;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface DashboardData {
  balance: number;
  depositsTotal: number;
  investimentTotals: number;
  expensesTotals: number;
  typePercentage: {
    [TransactionType.DEPOSIT]: number;
    [TransactionType.EXPENSE]: number;
    [TransactionType.INVESTMENT]: number;
  };
  totalExpensePerCategory: Array<{
    category: TransactionCategory;
    totalAmount: number;
    percentageOfTotal: number;
  }>;
  lastTransaction: Transaction[];
}

