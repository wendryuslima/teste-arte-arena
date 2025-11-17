"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { formatCurrency } from "@/lib/utils/currency";
import { DashboardData } from "@/types/transaction";

interface BalanceCardProps {
  data: DashboardData;
}

const BalanceCard = ({ data }: BalanceCardProps) => {
  return (
    <Card className="w-full border-primary/20 bg-primary/5">
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2">
            <Wallet size={16} className="text-primary" />
          </div>
          <span className="text-sm font-semibold">
            Saldo
          </span>
        </div>
        <p className="text-4xl font-bold text-foreground">
          {formatCurrency(data.balance)}
        </p>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
