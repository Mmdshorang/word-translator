// File path: src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { PublicViewPage } from './pages/PublicViewPage';
import Snackbar from './components/ui/Snackbar/Snackbar';
import './App.css'; 

function App() {
  return (
    <>
      <nav className="main-nav">
        <Link to="/">Public View</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<PublicViewPage />} />
          <Route path="/admin" element={<DashboardPage />} />
        </Routes>
      </main>
      <Snackbar />
    </>
  );
}

export default App;