
export interface LanguageSwitcherProps {
  languages: string[];
  selectedLang: string;
  onLanguageChange: (lang: string) => void;
  label?: string;
}
