import { useState, type ReactNode } from "react";
import type { SnackbarType } from "../../types";
import { SnackbarContext } from "./SnackbarContext";

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<SnackbarType>('info');
  const [visible, setVisible] = useState<boolean>(false);

  const showSnackbar = (msg: string, type: SnackbarType, duration = 3000) => {
    setMessage(msg);
    setType(type);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  const hideSnackbar = () => {
    setVisible(false);
  };

  return (
    <SnackbarContext.Provider value={{ message, type, visible, showSnackbar, hideSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};
