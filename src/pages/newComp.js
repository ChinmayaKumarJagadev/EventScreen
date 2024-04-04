import React, { useState, useEffect } from 'react';

function ProgressBarWithPause() {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 50) {
            return prevProgress + 1;
          } else {
            clearInterval(intervalId);
            setIsPaused(true);
            return prevProgress;
          }
        });
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 1000); // Adjust the pause time as needed

    setProgress((prevProgress) => {
      if (prevProgress >= 50) {
        return 0;
      } else {
        return prevProgress;
      }
    });
  };

  return (
    <div>
      <div
        style={{
          width: '300px',
          height: '20px',
          border: '1px solid #ccc',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${(progress / 50) * 100}%`,
            height: '100%',
            backgroundColor: '#3498db',
          }}
        ></div>
      </div>
      <button onClick={handlePause}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
}

export default ProgressBarWithPause;
