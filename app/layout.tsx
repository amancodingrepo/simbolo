import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoTopButton from "@/components/layout/GoTopButton";
import MobileMenu from "@/components/layout/MobileMenu";
import SettingsPanel from "@/components/layout/SettingsPanel";
import CursorTrail from "@/components/layout/CursorTrail";
import TemplateInit from "@/components/layout/TemplateInit";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simbolo - Growth-Driven Media & Marketing Agency",
  description: "Simbolo - Strategic media production, web design, and digital marketing services",
  icons: {
    icon: "/assets/images/logo/favicon.svg",
    apple: "/assets/images/logo/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="style" href="/assets/fonts/fonts.css" />
        <link rel="stylesheet" href="/assets/fonts/fonts.css" />
        <link rel="stylesheet" href="/assets/icon/icomoon/style.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick.theme.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body className="body header-fixed">
        <TemplateInit />
        <canvas className="cursor-trail" id="trail" style={{ display: "none" }}></canvas>

        <GoTopButton />
        <Header />
        <MobileMenu />
        <SettingsPanel />
        <CursorTrail />

        <main id="wrapper">{children}</main>

        <Footer />

        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/slick.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/countto.js" strategy="lazyOnload" />
        <Script src="/assets/js/carousel.js" strategy="lazyOnload" />
        <Script src="/assets/js/infinityslide.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollSmooth.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/ScrollToPlugin.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsapAnimation.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
