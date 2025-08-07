import { useTranslations } from "../contexts/translation/useTranslations";


export const DashboardPage = () => {
  const { state, addKeyword } = useTranslations();

  const handleAddNew = () => {
    // Using a prompt for simplicity, we will build a proper form later.
    const newKey = prompt("Enter the new keyword:");
    if (newKey) {
      addKeyword(newKey);
    }
  };

  return (
    <div>
      <h1>Translation Management</h1>
      <button onClick={handleAddNew}>+ Add Keyword</button>
      <ul>
        {state.keywords.sort((a,b) => a.order - b.order).map(keyword => (
          <li key={keyword.id}>
            {keyword.key}
          </li>
        ))}
      </ul>
    </div>
  );
};