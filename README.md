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

## Data Structure and Logic Choices

(این بخش مستقیماً در تسک خواسته شده است)

The application state is managed using **React's Context API** as required by the task. This choice is suitable for this project's scale, avoiding the boilerplate of more complex libraries like Redux while providing a centralized state management solution.

The data is stored in a single JSON object in `localStorage`. The core of this object is a `keywords` array. Each keyword is an object with a unique `id`, a `key`, an `order` property for sorting, and a nested `translations` object. This structure was chosen for a few key reasons:

-   **Array of Objects**: Using an array for `keywords` makes it straightforward to map over for rendering and to manage ordering with the `order` property.
-   **Nested `translations` Object**: Storing translations as a `{ lang: 'value' }` map allows for quick and efficient lookups (`keyword.translations.en`) without needing to iterate through another array.
-   **`dnd-kit`** was chosen for drag-and-drop due to its modern architecture, performance, and accessibility features.