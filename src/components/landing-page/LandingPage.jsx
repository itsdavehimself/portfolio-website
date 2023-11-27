import headshot from '../../assets/headshot.png';
import CircleComponent from '../circle-component/CircleComponent';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <CircleComponent>
      <main className={styles.hero}>
        <div className={styles.container}>
          <h1>DAVID SMOLEN</h1>
          <img className={styles['hero-image']} src={headshot} />
        </div>
      </main>
    </CircleComponent>
  );
}
