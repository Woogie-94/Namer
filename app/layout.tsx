import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/styledRegistry";
import GlobalStyle from "@/styles/globalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Namer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
