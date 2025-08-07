import {
  useState,
  useEffect,
  useCallback,
  type PropsWithChildren,
} from 'react';
import { TranslationContext } from './TranslationContext';
import { INITIAL_STATE } from '../../data/initialState';
import type { ITranslationContext, TranslationState, Keyword } from '../../types';
import { useSnackbar } from '../snackbar/useSnackbar';

export const TranslationProvider = ({ children }: PropsWithChildren) => {
  const { showSnackbar } = useSnackbar();
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
    setState((prev) => {
      // Check if the keyword already exists (case-insensitive)
      const keyExists = prev.keywords.some(
        k => k.key.toLowerCase() === key.toLowerCase()
      );

      if (keyExists) {
        showSnackbar(`Keyword "${key}" already exists!`, 'error');
        return prev; // Return previous state without changes
      }

      const newOrder =
        prev.keywords.length > 0
          ? Math.max(...prev.keywords.map((k) => k.order)) + 1
          : 1;

      const newKeyword: Keyword = {
        id: new Date().getTime().toString(),
        key,
        translations: {},
        order: newOrder,
      };

      showSnackbar(`Keyword "${key}" added successfully!`, 'success');
      return {
        ...prev,
        keywords: [...prev.keywords, newKeyword],
      };
    });
  }, [showSnackbar]);

  const editKeyword = useCallback((id: string, newKey: string) => {
    setState((prev) => ({
      ...prev,
      keywords: prev.keywords.map((k) =>
        k.id === id ? { ...k, key: newKey } : k
      ),
    }));
  }, []);

  const deleteKeyword = useCallback((id: string) => {
    console.log("Context: Deleting keyword with id:", id);

    setState((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((k) => k.id !== id),
    }));
    showSnackbar('Keyword deleted successfully!', 'error');
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
  const updateTranslation = useCallback((keywordId: string, langCode: string, value: string) => {
    setState((prev) => ({
      ...prev,
      keywords: prev.keywords.map((k) => {
        if (k.id === keywordId) {
          return {
            ...k,
            translations: {
              ...k.translations,
              [langCode]: value,
            },
          };
        }
        return k;
      }),
    }));
    showSnackbar('Translation updated!', 'info');
  }, []);
  const contextValue: ITranslationContext = {
    state,
    addKeyword,
    editKeyword,
    deleteKeyword,
    reorderKeywords,
    updateTranslation,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};
