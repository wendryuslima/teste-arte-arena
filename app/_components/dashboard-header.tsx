"use client";

import { useSearchParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MONTHS } from "./_constants/transactions";

const DashboardHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentMonth =
    searchParams.get("month") ||
    String(new Date().getMonth() + 1).padStart(2, "0");

  const handleMonthChange = (value: string) => {
    router.push(`/?month=${value}`);
  };

  const selectedMonth = MONTHS.find((m) => m.value === currentMonth);

  return (
    <Select value={currentMonth} onValueChange={handleMonthChange}>
      <SelectTrigger className="w-[150px] rounded-full">
        <SelectValue placeholder={selectedMonth?.label || "Selecione"} />
      </SelectTrigger>
      <SelectContent>
        {MONTHS.map((month) => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DashboardHeader;
