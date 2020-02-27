import React from 'react';

export default function WorldView({worldView, click, worldName}) {
  if (worldView) {
    return (
      <div className="worldViewOpen">
        <h1>{worldName}</h1>
        <ul> Region 1
          <li>City A</li>
          <li>City B</li>
        </ul>
        <ul> Region 2
          <li>City C</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="worldViewName">
        <div onClick={click}>{worldName}</div>
      </div>
    )
  }
}