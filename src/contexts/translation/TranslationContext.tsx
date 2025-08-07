import { createContext } from 'react';
import type { ITranslationContext } from '../../types';

export const TranslationContext = createContext<ITranslationContext | null>(null);
