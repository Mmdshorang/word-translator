import { KeywordList } from "../components/ui/KeywordList/KeywordList";
import { useTranslations } from "../contexts/translation/useTranslations";

export const DashboardPage = () => {
  const { addKeyword } = useTranslations();

  const handleAddNew = () => {
    const newKey = prompt("Enter the new keyword:");
    if (newKey && newKey.trim() !== '') {
      addKeyword(newKey.trim());
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h1>Translation Management</h1>
      <button onClick={handleAddNew} style={{ marginBottom: '1rem' }}>
        + Add Keyword
      </button>
      <KeywordList />
    </div>
  );
};