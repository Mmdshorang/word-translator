import type { TranslationState } from "../types";



export const INITIAL_STATE: TranslationState = {
  languages: ['en', 'fa', 'de'],
  keywords: [
    { id: '1', key: 'Hello', translations: { en: 'Hello', fa: 'سلام', de: 'Hallo' }, order: 1 },
    { id: '2', key: 'World', translations: { en: 'World', fa: 'جهان', de: 'Welt' }, order: 2 },
  ],
};