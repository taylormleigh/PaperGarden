import React from 'react';

export default function WorldView({index, world, worldView, click, worldName}) {
  // console.log("worldView.jsx: ", world.formfill);
  var parsed = JSON.parse(world.formfill);
  var keys = Object.keys(parsed);
  var values = Object.values(parsed);
  // console.log(parsed);

  if (worldView) {
    return (
      <div className="worldViewOpen">
        <h1>{worldName.toUpperCase()}</h1>
        <ul>
        {
          values.map((value, i) => {
            return <li key={"a"+i}><u>{keys[i]}</u> : {value} </li>;
          })
        }
        </ul>
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