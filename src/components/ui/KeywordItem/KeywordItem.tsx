import { useState, useEffect } from 'react'; // <-- Add useEffect here
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Keyword } from '../../../types';

import styles from './KeywordItem.module.css';
import { useTranslations } from '../../../contexts/translation/useTranslations';

interface KeywordItemProps {
  keyword: Keyword;
}

export const KeywordItem = ({ keyword }: KeywordItemProps) => {
  const { updateTranslation, deleteKeyword } = useTranslations();
  const langCode = 'fa';
  const [translation, setTranslation] = useState('');

  // This useEffect will sync the local state with the prop from the context
  useEffect(() => {
    setTranslation(keyword.translations[langCode] || '');
  }, [keyword.translations, langCode]);


  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: keyword.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSave = () => {
    updateTranslation(keyword.id, langCode, translation);
  };
  const handleDelete = () => {
    // For debugging, let's put the log here
    console.log('handleDelete function is now being called!');
    if (window.confirm(`Are you sure you want to delete "${keyword.key}"?`)) {
      deleteKeyword(keyword.id);
    }
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={styles.itemContainer}>
      <span className={styles.keyText}>{keyword.key}</span>
      <input
        type="text"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
        onBlur={handleSave}
        className={styles.input}
        placeholder="Enter translation"
      />
        <button
        onClick={handleDelete}

        onPointerDown={(e) => e.stopPropagation()}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};