"use client";

const TESTIMONIALS = [
  {
    quote:
      "The Ethiopia Yirgacheffe completely changed how I think about coffee. The floral notes are unlike anything I've had from a grocery store bag.",
    name: "Sarah Chen",
    role: "Home Barista, Portland",
    rating: 5,
  },
  {
    quote:
      "I've been subscribed for 8 months and every single bag has been exceptional. The freshness difference compared to other online roasters is real.",
    name: "Marcus Rivera",
    role: "Coffee Enthusiast, Austin",
    rating: 5,
  },
  {
    quote:
      "What sets Origen apart is the traceability. Scanning the QR code on the bag and seeing the exact farm and farmer — that's transparency done right.",
    name: "Aisha Okafor",
    role: "Food Writer, London",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="label-text text-rust">What People Say</span>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-espresso">
            Loved by Coffee People
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-espresso/5 bg-cream-light p-7 transition-all duration-500 hover:border-clay/30 hover:shadow-lg hover:shadow-clay/5 md:p-8"
            >
              {/* Rating stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="h-4 w-4 text-rust"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base leading-relaxed text-espresso/70">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="mt-6 flex items-center gap-3 border-t border-espresso/5 pt-5">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-clay/20 font-[family-name:var(--font-fraunces)] text-sm font-bold text-espresso">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-espresso">
                    {t.name}
                  </div>
                  <div className="text-xs text-espresso/40">{t.role}</div>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute -top-2 -right-2 font-[family-name:var(--font-fraunces)] text-8xl text-clay/10 transition-colors duration-500 group-hover:text-clay/20">
                &rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
