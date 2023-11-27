import { useState } from 'react';
import styles from './CircleComponent.module.css';

const CircleComponent = ({ children }) => {
  const [circleSize] = useState({ width: 44, height: 40 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [secondPosition, setSecondPosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMouseMove = (e) => {
    const offsetX = circleSize.width / 2.5;
    const offsetY = circleSize.height / 2.5;

    const smallCircleOffsetX = circleSize.width / 10;
    const smallCircleOffsetY = circleSize.height / 10;

    setTimeout(() => {
      setIsTransitioning(true);
      setPosition({
        x: e.clientX - offsetX,
        y: e.clientY - offsetY,
      });
      setSecondPosition({
        x: e.clientX - smallCircleOffsetX,
        y: e.clientY - smallCircleOffsetY,
      });
    }, 0);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <div
        className={`${styles.circle} ${
          isTransitioning ? styles.transitioning : ''
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onTransitionEnd={handleTransitionEnd}
      ></div>
      <div
        className={`${styles['inside-circle']} ${
          isTransitioning ? styles.transitioning : ''
        }`}
        style={{ left: `${secondPosition.x}px`, top: `${secondPosition.y}px` }}
        onTransitionEnd={handleTransitionEnd}
      ></div>
      {children}
    </div>
  );
};

export default CircleComponent;
