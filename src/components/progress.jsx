import React from 'react';

const Progress = ({title, value}) => {
  return ( 
    <div class="progress-item">
      <div class="progress-title">{title}</div>
      <div class="progress">
        <div
          class="progress-bar progress-bar-brand"
          aria-valuenow={value}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${value}%` }}
        >
          <span class="pb-number-box" style={{ opacity: 1 }}>
            <span class="pb-number">{value}</span>%
          </span>
        </div>
      </div>
    </div>

   );
}
 
export default Progress;
