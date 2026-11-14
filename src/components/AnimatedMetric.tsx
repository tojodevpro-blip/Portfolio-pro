import type { Metric } from "@/data/content";
import { AnimatedNumber } from "./AnimatedNumber";

type AnimatedMetricProps = {
  metric: Metric;
  size?: "sm" | "lg";
};

export function AnimatedMetric({ metric, size = "sm" }: AnimatedMetricProps) {
  return (
    <div className="flex flex-col-reverse">
      <dt className="mt-2 text-xs leading-snug text-muted">
        {metric.label}
        {metric.detail ? (
          <span className="mt-1 block text-[10px] leading-snug">
            {metric.detail}
          </span>
        ) : null}
      </dt>
      <dd
        className={
          size === "lg"
            ? "font-mono text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.04em]"
            : "font-mono text-2xl leading-none tracking-[-0.03em] sm:text-3xl"
        }
      >
        <AnimatedNumber
          value={metric.value}
          display={metric.display}
          prefix={metric.prefix}
          suffix={metric.suffix}
        />
      </dd>
    </div>
  );
}
