export type SnackbarType = 'success' | 'error' | 'info';

export interface SnackbarContextType {
  message: string;
  type: SnackbarType;
  visible: boolean;
  showSnackbar: (message: string, type: SnackbarType, duration?: number) => void;
  hideSnackbar: () => void;
}