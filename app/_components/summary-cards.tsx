"use client";

import { PiggyBank, TrendingUp, TrendingDown } from "lucide-react";
import { DashboardData } from "@/app/_types/transaction";
import SummaryCardItem from "./summary-card-item";

interface SummaryCardsProps {
  data: DashboardData;
}

const SummaryCards = ({ data }: SummaryCardsProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <SummaryCardItem
        icon={PiggyBank}
        label="Investido"
        value={data.investimentTotals}
        iconClassName="text-foreground"
        valueClassName="text-foreground"
      />
      <SummaryCardItem
        icon={TrendingUp}
        label="Receita"
        value={data.depositsTotal}
        iconClassName="text-primary"
        valueClassName="text-primary"
        iconContainerClassName="bg-primary/10"
      />
      <SummaryCardItem
        icon={TrendingDown}
        label="Despesas"
        value={data.expensesTotals}
        iconClassName="text-destructive"
        valueClassName="text-destructive"
        iconContainerClassName="bg-destructive/10"
      />
    </div>
  );
};

export default SummaryCards;
