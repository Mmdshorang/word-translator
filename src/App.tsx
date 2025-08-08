import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { PublicViewPage } from './pages/PublicViewPage';
import Snackbar from './components/ui/Snackbar/Snackbar';
import MainNav from './components/layout/MainNav/MainNav';



function App() {
  return (
    <>
      <MainNav />
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
