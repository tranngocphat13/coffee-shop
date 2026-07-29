import type { Metadata } from "next";
// Bước 1: Import font Montserrat và Alex_Brush từ next/font/google theo chuẩn App Router
import { Montserrat, Alex_Brush, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Font Montserrat (weight 800 - Extra Bold) dùng cho phần chữ chính của h1
const montserrat = Montserrat({
  variable: "--font-heading-main",
  subsets: ["latin"],
  display: "swap",
  weight: ["800"],
});

// Font Alex_Brush (weight 400 - script cursive) dùng cho phần chữ phụ "Summer edition"
const alexBrush = Alex_Brush({
  variable: "--font-heading-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

// Font chữ mặc định của trang web
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Local. — Specialty Coffee Shop | Iced Coffee Summer Edition",
  description:
    "Try our new refreshing iced drinks menu at Local. specialty coffee shops.",
  keywords: [
    "iced coffee",
    "specialty coffee shop",
    "local coffee",
    "cold brew",
    "iced latte",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      /* Bước 2: Thêm các biến CSS (--font-heading-main & --font-heading-script) vào thẻ html */
      className={`${jakarta.variable} ${montserrat.variable} ${alexBrush.variable} scroll-smooth`}
    >
      <body className="bg-[#FDFAF5] text-[#1F1B16] antialiased selection:bg-[#4A3626] selection:text-[#FDFAF5]">
        {children}
      </body>
    </html>
  );
}

