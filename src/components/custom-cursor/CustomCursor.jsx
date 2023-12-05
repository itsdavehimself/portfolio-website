import { useContext, useEffect, useRef } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  let offset;
  if (type === 'hover-name' || type === 'nav-hover') {
    offset = -30;
  } else {
    offset = -4;
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      positionRef.current.mouseX = clientX;
      positionRef.current.mouseY = clientY;
      positionRef.current.destinationX = positionRef.current.mouseX;
      positionRef.current.destinationY = positionRef.current.mouseY;
      mainCursor.current.style.transform = `translate3d(${
        positionRef.current.mouseX + offset
      }px, ${positionRef.current.mouseY + offset}px, 0)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [offset]);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
      positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

      if (
        Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY) <
        0.1
      ) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.destinationX += distanceX;
        positionRef.current.destinationY += distanceY;
      }

      secondaryCursor.current.style.transform = `translate3d(${
        destinationX - 16.5
      }px, ${destinationY - 16.5}px, 0)`;
    };

    followMouse();
  }, []);

  return (
    <div className={`${styles[type]}`}>
      <div className={styles['main-cursor']} ref={mainCursor}>
        <div className={styles['main-cursor-background']}>
          <div className={styles.greeting}>{'\u{1F44B}\u{1F3FB}'}</div>
        </div>
      </div>
      <div className={styles['secondary-cursor']} ref={secondaryCursor}>
        <div className={styles['cursor-background']}></div>
      </div>
    </div>
  );
};

export default CustomCursor;
