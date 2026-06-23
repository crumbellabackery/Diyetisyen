type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">{eyebrow}</span>
      <h2 className="mt-3 text-4xl font-semibold text-primary sm:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-on-surface/75">{subtitle}</p> : null}
    </div>
  );
}
