// src/components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  current: number;
  goal: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, goal }) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div style={{ width: '100%', background: '#555', borderRadius: '4px' }}>
      <div
        style={{
          width: `${percentage}%`,
          background: '#4caf50',
          textAlign: 'center',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressBar;