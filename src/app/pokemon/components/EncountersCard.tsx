import InfoCard from "./InfoCard";

type Location = { location_area: { name: string } };

function humanizeLocationName(raw: string) {
  if (!raw) return "";
  return raw
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default function EncountersCard({
  locations,
  accentClass,
  dotClass,
}: {
  locations: Location[];
  accentClass?: string;
  dotClass?: string;
}) {
  return (
    <InfoCard
      title="Encounter Locations"
      className={accentClass}
      dotClass={dotClass}
    >
      {locations.length === 0 ? (
        <p className="text-sm text-gray-700">No known encounter locations.</p>
      ) : (
        <div className="mt-2 max-h-64 overflow-y-auto pr-2">
          <ul className="space-y-2 list-disc list-inside">
            {locations.map((loc, i) => (
              <li key={i} className="">
                {humanizeLocationName(loc.location_area.name)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </InfoCard>
  );
}
