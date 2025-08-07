import type { Keyword } from "./keyword.types";


export interface TranslationState {
  languages: string[];
  keywords: Keyword[];
}