"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";

const AddTransactionButton = () => {
  return (
    <Button className="rounded-full font-bold">
      <ArrowDownUp size={16} />
      Adicionar transação
    </Button>
  );
};

export default AddTransactionButton;
