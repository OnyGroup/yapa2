import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Money = {
  amount: number;
  currency: string;
} | null | undefined;

type MoneyRange = {
  start: Money;
  stop: Money;
};

export function formatMoneyRange({ start, stop }: MoneyRange): string {
  if (!start) return "";
  
  const formatMoney = (money: Money): string => {
    if (!money) return "";
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: money.currency,
      minimumFractionDigits: 2
    }).format(money.amount);
  };

  if (!stop || start?.amount === stop?.amount) {
    return formatMoney(start);
  }
  
  return `${formatMoney(start)} - ${formatMoney(stop)}`;
}