type SectionHeadingProps = {
  index: string;
  title: string;
  kicker: string;
  id: string;
};

export function SectionHeading({ index, title, kicker, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 border-t border-line pt-5 sm:mb-14">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-mono text-[10px] tracking-label text-forest">
            {index}
          </span>
          <h2
            id={id}
            className="font-serif text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[0.92] tracking-[-0.035em]"
          >
            {title}
          </h2>
        </div>
        <p className="label text-muted">{kicker}</p>
      </div>
    </div>
  );
}
