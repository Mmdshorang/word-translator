import { useSnackbar } from "../../../contexts/snackbar/useSnackbar";

const Snackbar = () => {
  const { message, type, visible } = useSnackbar();

  if (!visible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  const borderColor =
    type === "success"
      ? "border-green-700"
      : type === "error"
      ? "border-red-700"
      : "border-blue-700";

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg text-white border-4 ${bgColor} ${borderColor}`}
      style={{ minWidth: "250px", textAlign: "center", fontWeight: "600" }}
    >
      {message}
    </div>
  );
};

export default Snackbar;
