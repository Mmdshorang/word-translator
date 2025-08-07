import { useSnackbar } from "../../../contexts/snackbar/useSnackbar";


const Snackbar = () => {
  const { message, type, visible } = useSnackbar();

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg text-white ${
        type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
