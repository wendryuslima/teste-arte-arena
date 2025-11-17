"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import { DashboardData } from "@/app/_types/transaction";
import { TransactionType } from "@/app/_types/transaction";

interface TransactionPieChartProps {
  data: DashboardData;
}

const TransactionPieChart = ({ data }: TransactionPieChartProps) => {
  const chartData = [
    {
      name: "Receita",
      value: data.typePercentage[TransactionType.DEPOSIT],
      fill: "#55B02E",
    },
    {
      name: "Investido",
      value: data.typePercentage[TransactionType.INVESTMENT],
      fill: "#94A3B8",
    },
    {
      name: "Despesas",
      value: data.typePercentage[TransactionType.EXPENSE],
      fill: "#E93030",
    },
  ];

  const chartConfig = {
    receita: {
      label: "Receita",
      color: "#55B02E",
    },
    investido: {
      label: "Investido",
      color: "#94A3B8",
    },
    despesas: {
      label: "Despesas",
      color: "#E93030",
    },
  };

  return (
    <Card className="animate-scale-in">
      <CardHeader>
        <CardTitle className="font-semibold">Distribuição por tipo</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <TrendingUp size={16} className="text-primary" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <span className="text-sm font-semibold">Receita</span>
              <span className="text-sm font-semibold">
                {data.typePercentage[TransactionType.DEPOSIT].toFixed(0)}%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-muted p-2">
              <PiggyBank size={16} className="text-foreground" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <span className="text-sm font-semibold">Investido</span>
              <span className="text-sm font-semibold">
                {data.typePercentage[TransactionType.INVESTMENT].toFixed(0)}%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-destructive/10 p-2">
              <TrendingDown size={16} className="text-destructive" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <span className="text-sm font-semibold">Despesas</span>
              <span className="text-sm font-semibold">
                {data.typePercentage[TransactionType.EXPENSE].toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionPieChart;
