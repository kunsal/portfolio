import React from "react";

const Timeline = ({ data }) => {
  return (
    <ul className="timeline">
      {data.map((d, i) => (
        <li key={i}>
          <div className="timeline-badge"></div>
          <div className="timeline-panel">
            <div className="timeline-preview">
              <img src="assets/images/features/1.jpg" alt="" />
            </div>
            <div className="timeline-body">
              <h5 className="timeline-title">{ d.title }</h5>
              <h6 className="timeline-description">
                { d.organisation } | { d.dateRange }
              </h6>
              <p>
               { d.description }
              </p>
            </div>
          </div>
        </li>
      ))}

      <div className="timeline-top"></div>
    </ul>
  );
};

export default Timeline;
