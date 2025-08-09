import { useState } from 'react';
import styles from './AddKeywordModal.module.css';

interface AddKeywordModalProps {
  onClose: () => void;
  onSave: (keyword: string) => void;
}

export default function AddKeywordModal({ onClose, onSave }: AddKeywordModalProps) {
  const [value, setValue] = useState('');

  const handleSave = () => {
    if (value.trim() !== '') {
      onSave(value.trim());
      onClose();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add New Keyword</h2>
        <input
          type="text"
          placeholder="Enter keyword..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
          autoFocus
        />
        <div className={styles.actions}>
          <button onClick={handleSave} className={styles.saveBtn}>Save</button>
          <button onClick={onClose} className={styles.cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
