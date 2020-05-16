import React from "react";

const Timeline = ({ data }) => {
  return (
    <ul class="timeline">
      {data.map(d => (
        <li>
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-preview">
              <img src="assets/images/features/1.jpg" alt="" />
            </div>
            <div class="timeline-body">
              <h5 class="timeline-title">{ d.title }</h5>
              <h6 class="timeline-description">
                { d.organisation } | { d.dateRange }
              </h6>
              <p>
               { d.description }
              </p>
            </div>
          </div>
        </li>
      ))}

      <div class="timeline-top"></div>
    </ul>
  );
};

export default Timeline;
