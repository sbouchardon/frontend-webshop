import React, { useState, useEffect } from 'react';

import Card from './Card.jsx';

export default function Comp0() {


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