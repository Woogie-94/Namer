"use client";

import trackingService from "@/services/trackingService";

export default function GoogleAnalytics() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null;
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag
                gtag('js', new Date());  
        `,
        }}
      />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM}`} />
    </>
  );
}

trackingService.configure();
