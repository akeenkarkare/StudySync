// src/components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  current: number;
  goal: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, goal }) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div style={{ width: '80%', background: '#464167', borderRadius: '100px' }}>
      <div
        style={{
          width: `${percentage}%`,
          background: '#756c8c',
          textAlign: 'center',
          color: 'white',
          borderRadius: '100px',
        }}
      >
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressBar;