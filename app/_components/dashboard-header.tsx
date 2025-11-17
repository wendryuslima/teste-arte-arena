"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { MONTHS } from "@/app/_lib/constants/transactions";
import { useRouter, useSearchParams } from "next/navigation";

const DashboardHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const monthParam = searchParams.get("month");
  const currentMonth = monthParam || "01";

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
