import { useState } from 'react';
import styles from './PublicViewPage.module.css';
import { useTranslations } from '../contexts/translation/useTranslations';
import KeywordCardList from '../components/ui/KeywordCardList/KeywordCardList';
import LanguageSwitcher from '../components/ui/LanguageSwitcher/LanguageSwitcher';


export const PublicViewPage = () => {
  const { state } = useTranslations();
  const { languages, keywords } = state;
  const [selectedLang, setSelectedLang] = useState(languages[0] || '');

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.cardContainer}>
        <header className={styles.header}>
          <h1>Word Translations</h1>
          <LanguageSwitcher
            languages={languages}
            selectedLang={selectedLang}
            onLanguageChange={setSelectedLang}
            label="Language:"
          />
        </header>

        <KeywordCardList keywords={keywords} selectedLang={selectedLang} />
      </div>
    </div>
  );
};