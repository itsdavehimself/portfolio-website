import CustomCursor from '../../components/custom-cursor/CustomCursor';
import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage = () => {
  return (
    <div className={styles['shopping-cart-container']}>
      <CustomCursor />
      <div>Shopping Cart Page</div>
    </div>
  );
};

export default ShoppingCartPage;
