import CustomCursor from '../../components/custom-cursor/CustomCursor';
import styles from './ChainseekerPage.module.css';

const ChainseekerPage = () => {
  return (
    <div className={styles['chainseeker-container']}>
      <CustomCursor />
      <div>Chainseeker Page</div>
    </div>
  );
};

export default ChainseekerPage;
