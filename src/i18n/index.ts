import { translations } from './translations';

export type Language = 'en' | 'es';

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}

export function getCurrentLanguage(pathname: string): Language {
  if (pathname.startsWith('/es')) {
    return 'es';
  }
  return 'en';
}

export function getAlternateLanguageUrl(pathname: string): string {
  const currentLang = getCurrentLanguage(pathname);
  const targetLang = currentLang === 'en' ? 'es' : 'en';

  if (currentLang === 'en') {
    // Estamos en /, ir a /es
    if (pathname === '/') {
      return '/es';
    }
    return `/es${pathname}`;
  } else {
    // Estamos en /es, ir a /
    if (pathname === '/es' || pathname === '/es/') {
      return '/';
    }
    return pathname.replace(/^\/es/, '') || '/';
  }
}

export function getLanguageLabel(lang: Language): string {
  return lang === 'en' ? 'EN' : 'ES';
}

export function getLanguageFullLabel(lang: Language): string {
  return lang === 'en' ? 'English' : 'Español';
}
