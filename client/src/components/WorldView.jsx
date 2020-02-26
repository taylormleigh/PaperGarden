import React from 'react';

export default function WorldView({worldView, click}) {
  if (worldView) {
    return (
      <div className="worldViewOpen">
        <h1>World Info Stuff</h1>
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
        <div onClick={click}>World Name</div>
      </div>
    )
  }
}