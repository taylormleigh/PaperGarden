import React from 'react';

export default function WorldView({index, world, worldView, click, worldName}) {
  // console.log("worldView.jsx: ", world.formfill);
  var parsed = JSON.parse(world.formfill);
  console.log(parsed);

  if (worldView) {
    return (
      <div className="worldViewOpen">
        <h1>{worldName.toUpperCase()}</h1>
        <br />{world.formfill}
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