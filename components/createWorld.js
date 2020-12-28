import React from 'react';
import Layout from './layout.js';
import Link from 'next/link';
import worlds from '../database/testAPI';

export default function NewWorld({newRegion, inputs, handleInputChange, handleSubmit}) {

  const addWorld = (event) => {
    alert('added!');
    return;
  }

  return (
    <div id="F1">
      <h1>NEW WORLD</h1>
      <h3>Fill out as much or as little as you like; your world can be edited later.</h3>
      <br />

      <form onSubmit={addWorld}>

        <label>Name your world</label>
        <br />
        <input 
          name="WorldName" 
          placeholder="world name"
          onChange={handleInputChange} 
          ></input>
        <br />
        <h2>PLANET</h2>
        <br />
        <br />
        How many days are in the year?
        <br />
        <input name="Revolution" placeholder="revolution" onChange={handleInputChange}></input>
        <br />
        How many hours are in a day?
        <br />
        <input name="Rotation" placeholder="rotation" onChange={handleInputChange}></input>
        <br />
        What are the seasons?
        <br />
        <textarea name="Seasons" placeholder="and how long does each season last?" onChange={handleInputChange}></textarea>
        <br />
        How many suns & moons?
        <br />
        <input name="Satellites" placeholder="do the satellites have names?" onChange={handleInputChange}></input>
        <br />
        <br />
        <Link href="/MyWorlds">
          <button type="submit" value="Submit">DONE</button>
        </Link>
      </form>
    </div>
  );
}