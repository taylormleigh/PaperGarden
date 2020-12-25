import React from 'react';
import worlds from '../database/testAPI.js';



export default function World({worldIndex}) {
  let currentWorld = worlds[worldIndex];
  let details = [];

  const getDetails = () => {
    let object = currentWorld["WorldDetails"];

    for (let key in object) {
      details.push(`${key} : ${object[key]}`)
    }
    return;
  }
    return (
      <>
        <h1>" {currentWorld.WorldName} "</h1>
        <h2>Details:</h2>
        <br/>
        {getDetails()}
        {
          details.map((detail, i) => {
            return <div key={detail[0]+i}>{detail}</div>
          })
        }
      </>
    )
}