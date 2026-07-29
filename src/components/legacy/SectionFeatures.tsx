"use client";

import { MapPin, ShieldAlert, Sparkles, CheckCircle } from "lucide-react";

export function SectionFeatures() {
  return (
    <section
      id="sec-5"
      className="snap-section flex flex-col justify-center bg-[#F7F3EC] px-6 py-16 lg:px-12 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: 1 Large Image Block */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-h-[500px] w-full">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Không gian quán Local."
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#C87D46] text-white">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-extrabold tracking-wider text-[#E8A850]">
                      Góc phố quen thuộc
                    </p>
                    <p className="text-sm font-bold text-white">
                      Thư thái thưởng thức iced coffee mỗi sáng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Stamp */}
            <div className="absolute -top-4 -right-4 bg-[#C87D46] text-white font-black text-xs uppercase px-4 py-2 rounded-full shadow-lg border-2 border-white transform rotate-6">
              100% Quality
            </div>
          </div>

          {/* Right: 2 Feature Items Stacked Vertically */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87D46] bg-[#C87D46]/10 px-3.5 py-1 rounded-full w-fit mb-3">
              Chất lượng vượt trội
            </span>

            <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#1E1915] leading-tight">
              ĐIỂM KHÁC BIỆT <span className="text-[#C87D46]">TẠI LOCAL</span>
            </h2>

            <p className="font-script text-2xl sm:text-3xl text-[#C87D46] font-bold mt-1 mb-8">
              chăm chút từ điều nhỏ nhất
            </p>

            {/* 2 Feature Items */}
            <div className="space-y-6">
              {/* Feature Item 1 */}
              <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-md border border-black/5 flex items-start gap-5 hover:shadow-xl transition-all duration-300">
                <div className="p-4 rounded-2xl bg-[#C87D46]/15 text-[#C87D46] shrink-0 mt-1">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase text-[#1E1915] mb-1">
                    Vị trí thuận tiện
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B655F] leading-relaxed font-medium">
                    Tọa lạc tại các góc phố trung tâm sầm uất, không gian thoáng đãng, bãi đỗ xe rộng rãi thuận tiện ghé mua mang đi hoặc ngồi chill cùng bạn bè.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-[#C87D46]">
                    <CheckCircle className="w-4 h-4" />
                    <span>Dễ tìm • Có chỗ đỗ ô tô & xe máy</span>
                  </div>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-md border border-black/5 flex items-start gap-5 hover:shadow-xl transition-all duration-300">
                <div className="p-4 rounded-2xl bg-[#1E1915]/10 text-[#1E1915] shrink-0 mt-1">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase text-[#1E1915] mb-1">
                    Cà phê thật, không phải nước loãng
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B655F] leading-relaxed font-medium">
                    100% hạt cốt nguyên chất rang mộc. Kỹ thuật ủ đặc biệt giữ cốt cà phê siêu sánh mịn, không bị loãng nhạt ngay cả khi đá đã tan hết.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-[#1E1915]">
                    <CheckCircle className="w-4 h-4 text-[#C87D46]" />
                    <span>Đậm vị hậu ngọt • Không phụ gia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
