import React from 'react';
import WorldView from './WorldView.jsx'

export default function Results({inputs}) {
  console.log(inputs);
  return (
    <div id="F3">
      <h1>YOUR STUFF</h1>
      <WorldView 
        worldView={true}
        inputs={inputs}
        />
      <br />
    </div>
  )
}