import { useEffect, useState } from 'react';
import { CALENDLY_URL } from './constants';

declare global {
  interface Window {
    Calendly: any;
    gtag?: (...args: any[]) => void;
  }
}

// Upwork forbids contact details on pages linked from Upwork.
// Opening the site with ?ref=upwork hides every contact channel for the rest of the visit.
const UPWORK_KEY = 'opswithbima_ref';

const detectUpworkMode = (): boolean => {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('ref') === 'upwork') {
      sessionStorage.setItem(UPWORK_KEY, 'upwork');
      return true;
    }
    return sessionStorage.getItem(UPWORK_KEY) === 'upwork';
  } catch {
    return new URLSearchParams(window.location.search).get('ref') === 'upwork';
  }
};

export const useUpworkMode = (): boolean => {
  const [upwork] = useState(detectUpworkMode);
  useEffect(() => {
    if (upwork) trackEvent('upwork_mode_visit');
  }, [upwork]);
  return upwork;
};

export const trackEvent = (name: string, params: Record<string, string> = {}) => {
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
};

export const openCalendly = (source: string) => {
  trackEvent('calendly_opened', { source });
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, '_blank');
  }
};
