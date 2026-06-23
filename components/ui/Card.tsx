import type { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: 'default' | 'soft';
};

const toneStyles: Record<NonNullable<CardProps['tone']>, string> = {
  default: 'bg-surface border border-outline/30 shadow-sm',
  soft: 'bg-primary-fixed/20 border border-primary/10',
};

export function Card({ tone = 'default', className = '', ...props }: CardProps) {
  return <div {...props} className={`rounded-[2rem] p-6 ${toneStyles[tone]} ${className}`} />;
}
