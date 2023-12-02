import styles from './Navbar.module.css';
import { useContext } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';

export default function Navbar() {
  const { setType } = useContext(CustomCursorContext);

  const handleHoverName = () => {
    setType('hover-name');
  };

  const handleHoverNameLeave = () => {
    setType('default');
  };

  return (
    <nav>
      <div>
        <h3 onMouseEnter={handleHoverName} onMouseLeave={handleHoverNameLeave}>
          DAVID SMOLEN
        </h3>
      </div>
      <div className={styles['nav-btns']}>
        <button className={styles['nav-btn']}>HOME</button>
        <button className={styles['nav-btn']}>ABOUT</button>
        <button className={styles['nav-btn']}>WORK</button>
        <button className={styles['nav-btn']}>DOTS</button>
        <button className={styles['nav-btn']}>CONTACT</button>
      </div>
    </nav>
  );
}
