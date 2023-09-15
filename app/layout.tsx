import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import GlobalProvider from "@/lib/GlobalProvider";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import StyledComponentsRegistry from "@/lib/styledRegistry";
import ServiceProvider from "@/services/ServiceProvider";
import GlobalStyle from "@/styles/globalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Namer",
  icons: {
    icon: "/favicon.ico",
  },
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

        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
