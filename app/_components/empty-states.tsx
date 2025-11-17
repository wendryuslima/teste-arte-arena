"use client";

import { FileX, Search, Inbox } from "lucide-react";
import { cn } from "@/app/_lib/utils";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const EmptyState = ({
  icon,
  title,
  description,
  className,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-4 animate-fade-in",
        className
      )}
    >
      <div className="mb-4 rounded-full bg-muted p-4">
        {icon || <Inbox className="h-8 w-8 text-muted-foreground" />}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="max-w-sm text-center text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export const EmptyTransactions = () => (
  <EmptyState
    icon={<FileX className="h-8 w-8 text-muted-foreground" />}
    title="Nenhuma transação encontrada"
    description="Comece adicionando sua primeira transação para começar a acompanhar suas finanças."
  />
);

export const EmptySearchResults = () => (
  <EmptyState
    icon={<Search className="h-8 w-8 text-muted-foreground" />}
    title="Nenhum resultado encontrado"
    description="Tente ajustar seus filtros ou termos de busca para encontrar o que procura."
  />
);

