import React from 'react';

export default function WorldView({index, world, worldView, click, worldName}) {
  // console.log("worldView.jsx: ", world.formfill);
  var parsed = JSON.parse(world.formfill);
  // console.log(parsed);

  if (worldView) {
    return (
      <div className="worldViewOpen">
        <h1>{worldName.toUpperCase()}</h1>
        <br />Region Name: {parsed.regionName}
        <br />City Name: {parsed.cityName}
        <br />
      </div>
    );
  } else {
    return (
      <div className="worldViewName">
        <div id={index} onClick={click}>{worldName}</div>
      </div>
    )
  }
}