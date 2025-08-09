# Word Translation Dashboard

This is a simple web application for managing and viewing keyword translations, built as a technical interview task. The application features a management dashboard and a public-facing view.

---

## Features

- **Management Dashboard (`/admin`)**:
  - View a list of all keywords.
  - Add new keywords.
  - Edit translations for multiple languages.
  - Delete keywords.
  - Reorder keywords using smooth drag-and-drop.
  - Filter keywords with a live search.
  - Switch between languages to edit their specific translations.

- **Public View Page (`/`)**:
  - Display a clean, user-friendly list of keywords and their translations.
  - Allow users to switch the display language.
  - Responsive design for mobile and desktop.

- **General Features**:
  - All data is persisted in the browser's `localStorage`.
  - User feedback for all actions (add, edit, delete) via a snackbar notification system.
  - The application is a Progressive Web App (PWA) and can be "installed" on devices.

---

## Tech Stack

- **Framework**: React.js with Vite
- **Language**: TypeScript
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Drag & Drop**: dnd-kit
- **Styling**: CSS Modules

---

## How to Run Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/Mmdshorang/word-translator.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd word-translator
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

---

