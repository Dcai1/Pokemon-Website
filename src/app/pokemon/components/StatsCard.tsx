import React from "react";
import InfoCard from "./InfoCard";

type Stat = { base_stat: number; stat: { name: string } };

export default function StatsCard({
  stats,
  accentClass,
  dotClass,
}: {
  stats: Stat[];
  accentClass?: string;
  dotClass?: string;
}) {
  const max = Math.max(...stats.map((s) => s.base_stat), 100);

  function formatStatName(name: string) {
    return name
      .split("-")
      .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");
  }

  return (
    <InfoCard title="Stats" className={accentClass} dotClass={dotClass}>
      <ul className="space-y-4">
        {stats.map((s, i) => {
          const pct = Math.round((s.base_stat / max) * 100);
          const style = {
            ["--w"]: `${pct}%`,
            animationDelay: `${i * 80}ms`,
          } as unknown as React.CSSProperties;

          return (
            <li key={i}>
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {formatStatName(s.stat.name)}
                </span>
                <span className="ml-2 font-mono text-sm">{s.base_stat}</span>
              </div>
              <div className="h-4 mt-2 overflow-hidden rounded bg-rose-100">
                <div
                  role="progressbar"
                  aria-label={`${s.stat.name} ${s.base_stat}`}
                  aria-valuemin={0}
                  aria-valuemax={max}
                  aria-valuenow={s.base_stat}
                  className="h-full rounded shadow-inner stat-fill bg-gradient-to-r from-rose-500 to-rose-600"
                  style={style}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </InfoCard>
  );
}
