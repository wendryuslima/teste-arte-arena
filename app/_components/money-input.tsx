"use client";

import * as React from "react";
import { NumericFormat } from "react-number-format";
import { cn } from "@/app/_lib/utils";

interface MoneyInputProps {
  placeholder?: string;
  value?: number;
  onValueChange?: (values: { floatValue?: number }) => void;
  onBlur?: () => void;
  disabled?: boolean;
  className?: string;
}

const MoneyInput = React.forwardRef<HTMLInputElement, MoneyInputProps>(
  (
    {
      className,
      value,
      onValueChange,
      onBlur,
      disabled,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <NumericFormat
        getInputRef={ref}
        value={value}
        onValueChange={onValueChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
    );
  }
);

MoneyInput.displayName = "MoneyInput";

export { MoneyInput };
