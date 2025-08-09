import { useState, useEffect, useRef } from 'react';
import styles from './LanguageSwitcher.module.css';
import type { LanguageSwitcherProps } from '../../../types/language.types';

const LanguageSwitcher = ({
  languages,
  selectedLang,
  onLanguageChange,
  label = 'Select a language:',
}: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

 
  const filteredLanguages = languages.filter(lang =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  
  const handleSelect = (lang: string) => {
    onLanguageChange(lang);
    setIsOpen(false);
    setSearchTerm(''); 
  };

  return (
    <div className={styles.switcherContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.dropdownWrapper} ref={wrapperRef}>
        <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
          <span>{selectedLang.toUpperCase()}</span>
          <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}></span>
        </button>

       
        {isOpen && (
          <div className={styles.dropdownPanel}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search language..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus 
            />
            <ul className={styles.optionsList}>
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map(lang => (
                  <li
                    key={lang}
                    className={`${styles.optionItem} ${selectedLang === lang ? styles.selectedItem : ''}`}
                    onClick={() => handleSelect(lang)}
                  >
                    {lang.toUpperCase()}
                  </li>
                ))
              ) : (
                <li className={styles.noResults}>No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;