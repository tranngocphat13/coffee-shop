"use client";

export function OriginStory() {
  return (
    <section id="origin" className="overflow-hidden bg-cream-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="label-text text-olive">Our Origins</span>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-espresso">
            Where Great Coffee Begins
          </h2>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Placeholder farm image — styled gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-olive/30 via-olive/20 to-clay/20">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-3 text-6xl">🏔️</div>
                    <p className="label-text text-olive/60">
                      High-altitude coffee farms
                    </p>
                  </div>
                </div>
              </div>
              {/* Overlay decorative border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-espresso/5" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-cream border border-olive/10 p-5 shadow-xl md:-right-8">
              <div className="font-[family-name:var(--font-fraunces)] text-3xl font-bold text-olive">
                1,800m
              </div>
              <div className="label-text mt-1 text-espresso/40">
                Average Altitude
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-espresso md:text-3xl">
              Direct relationships with farming families across three continents
            </h3>
            <p className="text-base leading-relaxed text-espresso/65">
              We don&apos;t just source beans — we build partnerships. Each of our
              farm partners receives a premium above Fair Trade price, and we
              visit every harvest to cup-test batches together. This isn&apos;t
              charity; it&apos;s how you get exceptional coffee.
            </p>
            <p className="text-base leading-relaxed text-espresso/65">
              From the volcanic slopes of Guatemala&apos;s Antigua Valley to the
              misty highlands of Ethiopia&apos;s Yirgacheffe region, every origin
              is selected for its unique terroir and the dedication of the
              people who tend it.
            </p>

            {/* Origin stats */}
            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-espresso/8 pt-6">
              {[
                { value: "12", label: "Partner Farms" },
                { value: "6", label: "Countries" },
                { value: "8yr", label: "Avg. Partnership" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-olive">
                    {stat.value}
                  </div>
                  <div className="label-text mt-1 text-[11px] text-espresso/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second row — reversed layout */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Text column */}
          <div className="flex flex-col gap-6 md:order-1">
            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-espresso md:text-3xl">
              Sustainability isn&apos;t a label — it&apos;s how we operate
            </h3>
            <p className="text-base leading-relaxed text-espresso/65">
              Every step of our supply chain is designed to minimize
              environmental impact. We offset all shipping emissions, use
              compostable packaging, and reinvest 5% of revenue into soil
              regeneration programs at partner farms.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Carbon Neutral", "Compostable Packaging", "Regenerative Farming"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-olive/20 bg-olive/5 px-4 py-1.5 text-sm text-olive"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Image column */}
          <div className="relative md:order-2">
            <div className="overflow-hidden rounded-3xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-clay/20 via-rust/10 to-olive/15">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-3 text-6xl">🌿</div>
                    <p className="label-text text-olive/60">
                      Sustainable farming practices
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-espresso/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
