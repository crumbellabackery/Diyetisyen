import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = '', ...props }: InputProps) {
  return <input {...props} className={`w-full rounded-[1.5rem] border border-outline px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${className}`} />;
}
