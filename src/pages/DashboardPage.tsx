import { useState } from 'react';
import { KeywordList } from '../components/ui/KeywordList/KeywordList';
import styles from './DashboardPage.module.css';
import { useTranslations } from '../contexts/translation/useTranslations';
import AddKeywordModal from '../components/ui/AddKeywordModal/AddKeywordModal';
import LanguageSwitcher from '../components/ui/LanguageSwitcher/LanguageSwitcher';

export const DashboardPage = () => {
  const { state, addKeyword } = useTranslations();
  const { languages } = state;
  const [currentLang, setCurrentLang] = useState(languages[0] || '');
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAddNew = (keyword: string) => {
    addKeyword(keyword);
  };

  return (
    <div className={styles.cardContainer}>
      <header className={styles.header}>
        <h1>Translation Management</h1>
        <div className={styles.controls}>
          <LanguageSwitcher
            languages={languages}
            selectedLang={currentLang}
            onLanguageChange={setCurrentLang}
            label="Edit Language:"
          />
        </div>
        <input
          type="text"
          placeholder="Filter keywords..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.filterInput}
        />
      </header>

      <div className={styles.listContainer}>
        <KeywordList currentLang={currentLang} filter={filter} />
      </div>

      <button onClick={() => setShowModal(true)} className={styles.addButton}>
        + Add Keyword
      </button>

      {showModal && (
        <AddKeywordModal
          onClose={() => setShowModal(false)}
          onSave={handleAddNew}
        />
      )}
    </div>
  );
};