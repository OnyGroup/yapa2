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

// Add this function for formatting money
export function formatMoney(money: Money): string {
  if (!money) return "";
  
  // Check if both amount and currency are missing
  if (money.amount === undefined || money.amount === null) {
    return "";
  }
  
  // If we have an amount but no currency
  if (!money.currency) {
    return money.amount.toFixed(2);
  }

  // If we have both amount and currency
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: money.currency,
    minimumFractionDigits: 2
  }).format(money.amount);
}

export function formatMoneyRange({ start, stop }: MoneyRange): string {
  if (!start) return "";
  
  if (!stop || start?.amount === stop?.amount) {
    return formatMoney(start);
  }
  
  return `${formatMoney(start)} - ${formatMoney(stop)}`;
}

// Add this function for generating variant URLs
export function getHrefForVariant({ 
  productSlug, 
  variantId 
}: { 
  productSlug: string; 
  variantId: string;
}): string {
  return `/products/${productSlug}?variant=${variantId}`;
}