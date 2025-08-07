import { useState } from 'react';

import styles from './PublicViewPage.module.css';
import { useTranslations } from '../contexts/translation/useTranslations';

export const PublicViewPage = () => {
  const { state } = useTranslations();
  const { languages, keywords } = state;
  // Set the first language as the default selected one
  const [selectedLang, setSelectedLang] = useState(languages[0] || '');

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Word Translations</h1>
        <div className={styles.langSwitcher}>
          {languages.map(lang => (
            <button
              key={lang}
              className={`${styles.langButton} ${selectedLang === lang ? styles.active : ''}`}
              onClick={() => setSelectedLang(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.cardGrid}>
        {keywords.sort((a, b) => a.order - b.order).map(keyword => (
          <div key={keyword.id} className={styles.card}>
            <p className={styles.key}>{keyword.key}</p>
            <p className={styles.translation}>
              {keyword.translations[selectedLang] || 'No translation yet'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};