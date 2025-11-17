"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank, TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils/currency";
import { DashboardData } from "@/types/transaction";

interface SummaryCardsProps {
  data: DashboardData;
}

const SummaryCards = ({ data }: SummaryCardsProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-muted p-2">
              <PiggyBank size={16} className="text-foreground" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Investido
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">
            {formatCurrency(data.investimentTotals)}
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
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

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-destructive/10 p-2">
              <TrendingDown size={14} className="text-destructive" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Despesas
            </span>
          </div>
          <p className="text-2xl font-bold text-destructive">
            {formatCurrency(data.expensesTotals)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
