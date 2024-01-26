import styles from './ScrollDown.module.css';
import ReactCurvedText from 'react-curved-text';
import { useState, useEffect } from 'react';

export default function ScrollDown() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animateRotation = () => {
      setRotation((prevRotation) => (prevRotation + 0.1) % 360);
      requestAnimationFrame(animateRotation);
    };

    animateRotation();

    return () => cancelAnimationFrame(animateRotation);
  }, []);

  return (
    <div className={styles['scroll-down']}>
      <div className={styles['center-dot']}></div>
      <ReactCurvedText
        width="200"
        height="200"
        cx="100"
        cy="100"
        rx={50}
        ry={50}
        startOffset="0"
        reversed={true}
        text="SCROLL ME &#183; SCROLL ME &#183; SCROLL ME &#183;"
        textProps={{
          style: {
            fontSize: '1.035rem',
            fontFamily: 'Avenir, Helvetica Neue, Arial, sans-serif',
            fontWeight: 500,
          },
        }}
        textPathProps={{ fill: '#efefef' }}
        tspanProps={{ dy: '-10' }}
        ellipseProps={null}
        svgProps={{ style: { transform: `rotate(${rotation}deg)` } }}
      />
    </div>
  );
}
