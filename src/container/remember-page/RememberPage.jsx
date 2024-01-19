import CustomCursor from '../../components/custom-cursor/CustomCursor';
import styles from './RememberPage.module.css';

const RememberPage = () => {
  return (
    <div className={styles['remember-container']}>
      <CustomCursor />
      <div>Remember Page</div>
    </div>
  );
};

export default RememberPage;
