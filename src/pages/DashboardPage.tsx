import { useState } from 'react';

import { KeywordList } from '../components/ui/KeywordList/KeywordList';
import styles from './DashboardPage.module.css';
import { useTranslations } from '../contexts/translation/useTranslations';

export const DashboardPage = () => {
  const { state, addKeyword } = useTranslations();
  const { languages } = state;
  // Set the first available language as default, or empty if none exist
  const [currentLang, setCurrentLang] = useState(languages[0] || '');
  const [filter, setFilter] = useState('');

  const handleAddNew = () => {
    const newKey = prompt("Enter the new keyword:");
    if (newKey && newKey.trim() !== '') {
      addKeyword(newKey.trim());
    }
  };

  return (
    // This is the main white card container
    <div className={styles.cardContainer}>
      <header className={styles.header}>
        <h1>Translation Management</h1>
        <div className={styles.controls}>
          <div className={styles.langSwitcher}>
            {languages.map(lang => (
              <button
                key={lang}
                className={`${styles.langButton} ${currentLang === lang ? styles.active : ''}`}
                onClick={() => setCurrentLang(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <input
          type="text"
          placeholder="Filter keywords..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.filterInput}
        />
      </header>

      {/* This container will have the internal scroll */}
      <div className={styles.listContainer}>
        <KeywordList currentLang={currentLang} filter={filter} />
      </div>

      {/* The Add button is now at the bottom of the card */}
      <button onClick={handleAddNew} className={styles.addButton}>
        + Add Keyword
      </button>
    </div>
  );
};