import localFont from "next/font/local";

export const fraunces = localFont({
  src: [
    { path: "../fonts/Fraunces-latin.woff2", weight: "300 900", style: "normal" },
    {
      path: "../fonts/Fraunces-Italic-latin.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const publicSans = localFont({
  src: "../fonts/PublicSans-latin.woff2",
  weight: "300 700",
  style: "normal",
  variable: "--font-public-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const jetbrainsMono = localFont({
  src: "../fonts/JetBrainsMono-latin.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});
