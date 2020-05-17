import React from 'react';

const Progress = ({title, value}) => {
  return ( 
    <div className="progress-item">
      <div className="progress-title">{title}</div>
      <div className="progress">
        <div
          className="progress-bar progress-bar-brand"
          aria-valuenow={value}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${value}%` }}
        >
          <span className="pb-number-box" style={{ opacity: 1 }}>
            <span className="pb-number">{value}</span>%
          </span>
        </div>
      </div>
    </div>

   );
}
 
export default Progress;
