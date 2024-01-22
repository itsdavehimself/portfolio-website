import { useState, useEffect } from 'react';

export default function NpmLogo() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg
      fill="#efefef"
      height={isSmallScreen ? '2rem' : '4rem'}
      width={isSmallScreen ? '2rem' : '4rem'}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>npm</title>
      <path d="M7.415 7.656l17.291 0.024-0.011 17.29h-4.329l0.012-12.974h-4.319l-0.010 12.964h-8.656zM3.207 1.004c-0.002 0-0.003 0-0.005 0-1.214 0-2.198 0.984-2.198 2.198 0 0.002 0 0.004 0 0.006v-0 25.585c0 0.002 0 0.003 0 0.005 0 1.214 0.984 2.198 2.198 2.198 0.002 0 0.004 0 0.006 0h25.585c0.002 0 0.003 0 0.005 0 1.214 0 2.198-0.984 2.198-2.198 0-0.002 0-0.004 0-0.006v0-25.585c0-0.002 0-0.003 0-0.005 0-1.214-0.984-2.198-2.198-2.198-0.002 0-0.004 0-0.006 0h0z"></path>
    </svg>
  );
}
