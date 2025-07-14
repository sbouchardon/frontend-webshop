import React, { useState, useEffect } from 'react';

import Card from './Card.jsx';

export default function Comp0() {

  const bgColors = ['bg-beige', 'bg-gold', 'bg-red'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % bgColors.length);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* computer */}
      <div className="flex h-screen w-screen overflow-hidden">
        {/* Left side */}
        <div className="w-1/2 flex items-center justify-center">
        </div>

        {/* Right side */}

          <div className="w-1/2 flex items-center justify-center">
            <Card image="/data/data1.svg" name="Product1" description="This is a great product." price="19.99" />
          </div>

    </div>
    </>
  )
}