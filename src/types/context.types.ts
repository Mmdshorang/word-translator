import type { TranslationState } from "./state.types";

export interface ITranslationContext {
  state: TranslationState;
  addKeyword: (key: string) => void;
  editKeyword: (id: string, newKey: string) => void;
  deleteKeyword: (id: string) => void;
  reorderKeywords: (newOrder: string[]) => void;
  updateTranslation: (keywordId: string, langCode: string, value: string) => void;
}
