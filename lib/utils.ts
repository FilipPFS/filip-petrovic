import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string) {
  const maxLength = 100;

  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}
