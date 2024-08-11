import React, { useEffect, useState } from 'react';
import "./Line.css"
const Line = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset >= 100 ? -100 : prevOffset + 0.5);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="moving-line-container">
      <div className="moving-line" style={{ transform: translateX({offset}) }}>
      <span>👓 Experience the SpecGo's difference today 👓</span>
    
      </div>
    </div>
  );
};

export default Line;