"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Wallet, PiggyBank, TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils/currency";
import { DashboardData } from "@/types/transaction";

interface SummaryCardsProps {
  data: DashboardData;
}

const SummaryCards = ({ data }: SummaryCardsProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="bg-white bg-opacity-5">
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white bg-opacity-[3%] p-2">
              <Wallet size={16} />
            </div>
            <span className="text-sm font-semibold text-white opacity-70">
              Saldo
            </span>
          </div>
          <p className="text-4xl font-bold text-white">
            {formatCurrency(data.balance)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white bg-opacity-[3%] p-2">
              <PiggyBank size={16} />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Investido
            </span>
          </div>
          <p className="text-2xl font-bold text-white">
            {formatCurrency(data.investimentTotals)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white bg-opacity-[3%] p-2">
              <TrendingUp size={16} className="text-primary" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Receita
            </span>
          </div>
          <p className="text-2xl font-bold text-primary">
            {formatCurrency(data.depositsTotal)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white bg-opacity-[3%] p-2">
              <TrendingDown size={14} className="text-red-500" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Despesas
            </span>
          </div>
          <p className="text-2xl font-bold text-red-500">
            {formatCurrency(data.expensesTotals)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
