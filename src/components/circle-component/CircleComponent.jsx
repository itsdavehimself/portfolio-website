import { useState } from 'react';
import styles from './CircleComponent.module.css';
import PropTypes from 'prop-types';

export default function CircleComponent({ children }) {
  const [circleSize] = useState({ width: 44, height: 40 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [secondPosition, setSecondPosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const offsetX = circleSize.width / 2.45;
    const offsetY = circleSize.height / 2.35;

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.circle} ${isHovered ? '' : styles.hidden}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onTransitionEnd={handleTransitionEnd}
      ></div>
      <div
        className={`${styles['inside-circle']} ${
          isTransitioning ? styles['transitioning-inside'] : ''
        } ${isHovered ? '' : styles.hidden}`}
        style={{
          left: `${secondPosition.x}px`,
          top: `${secondPosition.y}px`,
        }}
        onTransitionEnd={handleTransitionEnd}
      ></div>
      {children}
    </div>
  );
}

CircleComponent.propTypes = {
  children: PropTypes.element,
};
