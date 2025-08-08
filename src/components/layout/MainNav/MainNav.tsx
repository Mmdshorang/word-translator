import { Link } from 'react-router-dom';
import styles from './MainNav.module.css';

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <Link to="/">Public View</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </nav>
  );
}
