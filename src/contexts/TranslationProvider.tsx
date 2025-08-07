import {
  useState,
  useEffect,
  useCallback,
  type PropsWithChildren,
} from 'react';
import { TranslationContext } from './TranslationContext';
import { INITIAL_STATE } from '../data/initialState';
import type { ITranslationContext, TranslationState, Keyword } from '../types';

export const TranslationProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<TranslationState>(() => {
    try {
      const stored = localStorage.getItem('translation-data');
      return stored ? JSON.parse(stored) : INITIAL_STATE;
    } catch {
      return INITIAL_STATE;
    }
  });

  useEffect(() => {
    localStorage.setItem('translation-data', JSON.stringify(state));
  }, [state]);

  const addKeyword = useCallback((key: string) => {
    const newOrder =
      state.keywords.length > 0
        ? Math.max(...state.keywords.map((k) => k.order)) + 1
        : 1;

    const newKeyword: Keyword = {
      id: new Date().getTime().toString(),
      key,
      translations: {},
      order: newOrder,
    };

    setState((prev) => ({
      ...prev,
      keywords: [...prev.keywords, newKeyword],
    }));
  }, [state.keywords]);

  const editKeyword = useCallback((id: string, newKey: string) => {
    setState((prev) => ({
      ...prev,
      keywords: prev.keywords.map((k) =>
        k.id === id ? { ...k, key: newKey } : k
      ),
    }));
  }, []);

  const deleteKeyword = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((k) => k.id !== id),
    }));
  }, []);

  const reorderKeywords = useCallback((newOrder: string[]) => {
    setState((prev) => ({
      ...prev,
      keywords: newOrder.map((id, index) => {
        const item = prev.keywords.find((k) => k.id === id);
        return item ? { ...item, order: index + 1 } : null;
      }).filter(Boolean) as Keyword[],
    }));
  }, []);

  const contextValue: ITranslationContext = {
    state,
    addKeyword,
    editKeyword,
    deleteKeyword,
    reorderKeywords,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};
