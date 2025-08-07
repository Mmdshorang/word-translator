import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SnackbarProvider } from './contexts/snackbar/SnackbarProvider.tsx'
import { TranslationProvider } from './contexts/translation/TranslationProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </SnackbarProvider>
  </StrictMode>,
)
