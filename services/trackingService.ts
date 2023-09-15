export interface EventProperty extends Gtag.CustomParams, Gtag.ControlParams, Omit<Gtag.EventParams, "value"> {
  value?: string | number;
}

class TrackingService {
  configure() {
    if (typeof window !== "undefined") {
      if (typeof window.gtag !== "undefined") {
        window.gtag("config", process.env.NEXT_PUBLIC_GTM || "", {
          page_path: window.location.pathname,
        });
      }
    }
  }

  event(action: Gtag.EventNames | string, property?: EventProperty) {
    if (typeof window !== "undefined") {
      if (typeof window.gtag !== "undefined") {
        window.gtag("event", action, property);
      }
    }
  }
}

const trackingService = new TrackingService();

export default trackingService;
