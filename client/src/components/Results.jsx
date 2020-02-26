import React from 'react';
import WorldView from './WorldView.jsx'

export default function Results({prev, newRegion, done}) {
  return (
    <div id="F3">
      <h1>YOUR STUFF</h1>
      <WorldView 
        worldView={true}
        />
      <br />
    </div>
  )
}