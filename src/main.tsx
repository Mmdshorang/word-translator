import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SnackbarProvider } from './contexts/snackbar/SnackbarProvider.tsx'
import { TranslationProvider } from './contexts/translation/TranslationProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <TranslationProvider>
          <App />
        </TranslationProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
