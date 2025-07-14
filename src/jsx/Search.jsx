
import { useState, useEffect, useRef } from 'react';

export default function Search() {
  // This component is used to create the search bar
  // Search in the cloud database for the existence of a possible product

  const [hidden, setHidden] = useState(true);

  const updateHidden = () => {
    setHidden(prev => !prev);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (!hidden && inputRef.current) {
      inputRef.current.focus();
    }
  }, [hidden]);

  return (
    <>
      <div className='flex gap-0'>
        <button onClick={updateHidden}>
          <img className="nav-button" src="/search.svg" alt="search" />
        </button>

        <div className={`
          transition-all duration-600 ease-out
          transform
          ${hidden ? 'opacity-0 -translate-x-0 pointer-events-none' : 'opacity-100 translate-x-5'}
        `}>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-10 sm:mt-0">

            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="border-b-2 border-white text-white px-8 py-2 w-full"
            />
            <button type='submit' className='bg-white text-black px-3 py-2 mt-2 sm:mt-0 w-full sm:w-auto'>ok</button>

          </div>

        </div>
      </div>
    </>
  )
};

// breaking point at 520x720 for the search bar touching the right buttons -> phone mode