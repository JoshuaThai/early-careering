import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "EarlyCareering | Home", // Title of Page
  description: "EarlyCareering's Home Page", // Description of Page
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
