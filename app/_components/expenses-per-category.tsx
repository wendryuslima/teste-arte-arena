"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { TRANSACTION_CATEGORY_LABELS } from "./_constants/transactions";
import { DashboardData } from "@/types/transaction";
import { formatCurrency } from "@/lib/utils/currency";

interface ExpensesPerCategoryProps {
  data: DashboardData;
}

const ExpensesPerCategory = ({ data }: ExpensesPerCategoryProps) => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="font-semibold">Gastos por categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-full rounded-md border pb-6">
          <div className="space-y-6 p-6">
            {data.totalExpensePerCategory.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex w-full justify-between">
                  <span className="text-sm font-bold">
                    {TRANSACTION_CATEGORY_LABELS[item.category]}
                  </span>
                  <span className="text-sm font-bold">
                    {item.percentageOfTotal.toFixed(0)}%
                  </span>
                </div>
                <Progress value={item.percentageOfTotal} />
                <span className="text-xs text-muted-foreground">
                  {formatCurrency(item.totalAmount)}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ExpensesPerCategory;
