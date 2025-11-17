"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { formatCurrency } from "@/lib/utils/currency";
import { cn } from "@/lib/utils";

interface SummaryCardItemProps {
  icon: LucideIcon;
  label: string;
  value: number;
  iconClassName?: string;
  valueClassName?: string;
  cardClassName?: string;
  iconContainerClassName?: string;
}

const SummaryCardItem = ({
  icon: Icon,
  label,
  value,
  iconClassName,
  valueClassName,
  cardClassName,
  iconContainerClassName,
}: SummaryCardItemProps) => {
  return (
    <Card className={cn("border-primary/20 bg-primary/5", cardClassName)}>
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <div
            className={cn("rounded-lg bg-muted p-2", iconContainerClassName)}
          >
            <Icon size={16} className={iconClassName} />
          </div>
          <span className="text-sm font-semibold text-muted-foreground">
            {label}
          </span>
        </div>
        <p className={cn("text-2xl font-bold", valueClassName)}>
          {formatCurrency(value)}
        </p>
      </CardContent>
    </Card>
  );
};

export default SummaryCardItem;
