import { en } from './en';
import { es } from './es';

export type Lang = 'en' | 'es';

export function getLang(url: URL): Lang {
  return url.pathname.startsWith('/es') ? 'es' : 'en';
}

export function getContent(lang: Lang) {
  return lang === 'es' ? es : en;
}
