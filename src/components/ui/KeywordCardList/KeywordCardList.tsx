import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import styles from './KeywordCardList.module.css';
import type { Keyword } from '../../../types';

interface Props {
    keywords: Keyword[];
    selectedLang: string;
}
const KeywordCardList = ({ keywords, selectedLang }: Props) => {
    return (
        <div className={styles.scrollContainer}>
            <PerfectScrollbar options={{ suppressScrollX: true }}>
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
            </PerfectScrollbar>
        </div>
    );
}
export default KeywordCardList