/**
 * Classnames Utility
 * Location: lib/utils/cn.ts
 * 
 * A utility function to merge Tailwind CSS classes intelligently,
 * handling conflicts and conditional classes.
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names intelligently, handling Tailwind CSS conflicts
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
