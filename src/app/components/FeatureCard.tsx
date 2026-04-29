type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  delay?: number;
};

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  external = false,
  delay = 0,
}: FeatureCardProps) {
  return (
    <div
      className="p-6 shadow-sm rounded-2xl glass fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block mt-4 text-sm font-medium text-rose-600 hover:underline"
      >
        Explore →
      </a>
    </div>
  );
}
