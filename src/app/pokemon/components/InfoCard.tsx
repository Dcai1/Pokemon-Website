import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
  dotClass?: string;
};

export default function InfoCard({
  title,
  children,
  className = "",
  dotClass = "bg-rose-500",
}: Props) {
  const base =
    "glass p-6 rounded-xl shadow-xl border border-rose-50 transform transition-all";

  const defaultGradient =
    "bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200";

  const id = `info-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div
      id={id}
      role="region"
      aria-labelledby={id}
      tabIndex={0}
      className={`${base} ${defaultGradient} ${className} hover:shadow-2xl hover:-translate-y-1`}
    >
      <h3
        id={id}
        className="text-lg font-semibold mb-3 flex items-center gap-3"
      >
        <span
          className={`inline-block w-3 h-3 rounded-full shadow-sm ${dotClass}`}
        />
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}
