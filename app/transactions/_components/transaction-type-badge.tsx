"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Circle } from "lucide-react";
import { TransactionType } from "@/app/_types/transaction";
import { cn } from "@/app/_lib/utils";

interface TransactionTypeBadgeProps {
  type: TransactionType;
}

const TransactionTypeBadge = ({ type }: TransactionTypeBadgeProps) => {
  const getTypeConfig = () => {
    switch (type) {
      case TransactionType.DEPOSIT:
        return {
          label: "Depósito",
          className: "bg-muted text-primary",
          iconFill: "fill-primary",
        };
      case TransactionType.EXPENSE:
        return {
          label: "Despesa",
          className: "bg-[#F6352E] bg-opacity-10 text-[#F6352E]",
          iconFill: "fill-[#F6352E]",
        };
      case TransactionType.INVESTMENT:
        return {
          label: "Investimento",
          className: "bg-muted text-foreground",
          iconFill: "fill-foreground",
        };
      default:
        return {
          label: "Outro",
          className: "bg-muted text-foreground",
          iconFill: "fill-foreground",
        };
    }
  };

  const config = getTypeConfig();

  return (
    <Badge className={cn("font-bold", config.className)}>
      <Circle size={8} className={cn("mr-1", config.iconFill)} />
      {config.label}
    </Badge>
  );
};

export default TransactionTypeBadge;
