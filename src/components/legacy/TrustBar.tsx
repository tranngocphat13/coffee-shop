"use client";

const TRUST_ITEMS = [
  { label: "Specialty Coffee Association", icon: "🏅" },
  { label: "Fair Trade Certified", icon: "🤝" },
  { label: "Rainforest Alliance", icon: "🌿" },
  { label: "Organic Certified", icon: "🌱" },
  { label: "Carbon Neutral", icon: "♻️" },
];

export function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="relative border-y border-espresso/5 bg-cream-light py-6"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:justify-between">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 opacity-50 transition-opacity duration-300 hover:opacity-80"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="label-text text-espresso/60 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
