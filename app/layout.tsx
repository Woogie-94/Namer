import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GlobalProvider from "@/lib/GlobalProvider";
import StyledComponentsRegistry from "@/lib/styledRegistry";
import ServiceProvider from "@/services/ServiceProvider";
import GlobalStyle from "@/styles/globalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Namer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <ServiceProvider>
          <GlobalProvider>
            <StyledComponentsRegistry>
              {children}
              <GlobalStyle />
            </StyledComponentsRegistry>
          </GlobalProvider>
        </ServiceProvider>
      </body>
    </html>
  );
}
