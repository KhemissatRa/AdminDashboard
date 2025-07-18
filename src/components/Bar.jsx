import React from 'react';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function MyCircularProgress() {
  const value = 72;

  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: 'green',
          textColor: 'green',
          trailColor: '#eee',
        })}
      />
    </div>
  );
}

export default MyCircularProgress;
