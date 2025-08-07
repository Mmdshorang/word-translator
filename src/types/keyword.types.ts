export interface Translations {
  [languageCode: string]: string;
}

export interface Keyword {
  id: string;
  key: string;
  translations: Translations;
  order: number;
}