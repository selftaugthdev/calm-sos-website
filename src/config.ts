export const site = {
  name: 'Calm SOS',
  url: 'https://calmsos.com',
  email: 'hello@calmsos.com',
  appStoreUrl: 'https://apps.apple.com/us/app/calm-sos/id6751938184?ppid=833ea6e1-677d-4501-ba2b-edcb724a414c',
  appStoreLabel: 'Download on the App Store',
  pitch: 'A quieter moment, right when you need one.',
  // Replace these placeholders only after confirming the shipped product.
  pricing: 'Pricing details to be confirmed before launch.',
  developer: 'Thierry De Belder, Belgium'
} as const;

export const languages = ['en', 'nl', 'fr'] as const;
export type Language = (typeof languages)[number];
export const languageNames: Record<Language, string> = { en: 'English', nl: 'Nederlands', fr: 'Français' };
