import { useState, useEffect, useRef } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { KeywordItemProps } from '../../../types';
import styles from './KeywordItem.module.css';
import { useTranslations } from '../../../contexts/translation/useTranslations';

export const KeywordItem = ({ keyword, currentLang }: KeywordItemProps) => {
    const { updateTranslation, deleteKeyword } = useTranslations();

    const [translation, setTranslation] = useState('');
    const isEditingRef = useRef(false); // برای جلوگیری از ریست شدن موقع تایپ

    // ست کردن مقدار اولیه یا وقتی که keyword تغییر کرده
    useEffect(() => {
        if (!isEditingRef.current) {
            setTranslation(keyword.translations[currentLang] || '');
        }
    }, [keyword.translations, currentLang]);

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: keyword.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const handleSave = () => {
        updateTranslation(keyword.id, currentLang, translation.trim());
        isEditingRef.current = false; // کاربر تایپ رو تموم کرد
    };

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${keyword.key}"?`)) {
            deleteKeyword(keyword.id);
        }
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={styles.itemContainer}
        >
            <span
                className={`${styles.keyText} ${!keyword.translations[currentLang] ? styles.untranslated : ''}`}
            >
                {keyword.key}
            </span>

            <input
                type="text"
                value={translation}
                onPointerDown={(e) => e.stopPropagation()}
                onChange={(e) => {
                    isEditingRef.current = true; // یعنی کاربر داره تایپ می‌کنه
                    setTranslation(e.target.value);
                }}
                onBlur={handleSave}
                className={styles.input}
                placeholder={`Translation for ${currentLang.toUpperCase()}`}
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
