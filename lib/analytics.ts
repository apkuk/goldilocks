// Analytics wrapper for Plausible (or other privacy-focused analytics)

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number> }
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  props?: Record<string, string | number>
): void {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  } else if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, props);
  }
}

export function trackPageView(path: string): void {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('pageview');
  }
}
