// src/lib/utils.ts
// Combines Tailwind classes safely (removes duplicates/conflicts).
// Usage: className={cn("base-class", condition && "extra-class")}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
