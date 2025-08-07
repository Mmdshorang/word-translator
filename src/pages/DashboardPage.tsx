import { useState } from 'react'; // <-- Import useState

import { KeywordList } from '../components/ui/KeywordList/KeywordList';
import styles from './DashboardPage.module.css'; // <-- Let's add some styles
import { useTranslations } from '../contexts/translation/useTranslations';

export const DashboardPage = () => {
    const { state, addKeyword } = useTranslations();
    const { languages } = state;
    const [filter, setFilter] = useState('');
    const [currentLang, setCurrentLang] = useState(languages[0] || '');

    const handleAddNew = () => {
        const newKey = prompt("Enter the new keyword:");
        if (newKey && newKey.trim() !== '') {
            addKeyword(newKey.trim());
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Translation Management</h1>
                <div className={styles.controls}>
                    {/* Language Switcher UI */}
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
                    <button onClick={handleAddNew} className={styles.addButton}>
                        + Add Keyword
                    </button>
                    <input
                        type="text"
                        placeholder="Filter keywords..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className={styles.filterInput} // We will add this style
                    />
                </div>
            </header>
            {/* Pass the selected language down to the list */}
        <KeywordList currentLang={currentLang} filter={filter} />
        </div>
    );
};