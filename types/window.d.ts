// This tells TypeScript that we are adding new properties to the global Window object
export {};

declare global {
  interface Window {
    // The function to initialize the widget
    googleTranslateElementInit?: () => void;
    // The function we created to trigger a translation
    triggerGoogleTranslation?: (languageCode: string) => void;
  }
}