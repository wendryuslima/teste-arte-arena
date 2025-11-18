"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/app/_lib/utils";
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";

interface DatePickerDemoProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

const DatePickerDemo = ({ value, onChange }: DatePickerDemoProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal touch-manipulation",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? (
            format(value, "d 'de' MMMM 'de' yyyy", { locale: ptBR })
          ) : (
            <span>Selecione uma data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="h-[320px] w-auto p-0 z-[100] touch-manipulation"
        align="start"
        onInteractOutside={(e) => {
          
          const target = e.target as HTMLElement;
          if (target.closest('[role="dialog"]')) {
            e.preventDefault();
          }
        }}
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange?.(date);
            
            if (date) {
              setOpen(false);
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePickerDemo };
