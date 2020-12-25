import React, { Fragment } from 'react';
import Layout from './layout.js';
import Link from 'next/link';
import worlds from '../database/testAPI';

export default function NewWorld({newRegion, inputs, handleInputChange, handleSubmit}) {
  let worldObj = {
    WorldName: inputs.WorldName,
    WorldDetails: {
      Revolution: inputs.Revolution,
      Rotation: inputs.Rotation,
      Seasons: inputs.Seasons,
      Satellites: inputs.Satellites,
    },
    WorldRegions: []
  }

  const addWorld = () => {
    alert('Added!')
    worlds.push(worldObj);
    return ;
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
        <textarea name="Seasons" placeholder="Does it vary by region? How long does each season last?" onChange={handleInputChange}></textarea>
        <br />
        How many suns & moons?
        <br />
        <textarea name="Satellites" placeholder="Do these celestial bodies have names or special meaning to the inhabitants of your planet?" onChange={handleInputChange}></textarea>
        <br />
        {/* <br />
        <h2>LOGIC</h2>
        <br />
        Could this world exist with our current laws of physics or is there a fundamental difference?
        <br />
        <textarea placeholder="spell out the logic if it differs from the universe we know, i.e. magic is real and energy can come from nothing"></textarea>
        <br />
        What other quirks about this reality exist?
        <br />
        <textarea placeholder="i.e. physics still hold, but humans have gills and can breathe underwater"></textarea>
        <br />
        <h2>LIFE</h2>
        <br />
        Describe the intelligent lifeforms that exist on this planet
        <br />
        <textarea placeholder="If more than one race, how and when did each race evolve"></textarea>
        <textarea placeholder="general appearance(s)"></textarea>
        <textarea placeholder="average lifespan(s)"></textarea>
        <textarea placeholder="unique facets, physical and otherwise"></textarea>
        <textarea placeholder="how each interacts with other races"></textarea> */}







        <br />
        {/* <Link href="/CreateRegion"><button>NEW REGION</button></Link> */}
        <Link href="/MyWorlds">
          <button type="submit" value="Submit">DONE</button>
        </Link>
      </form>
    </div>
  );
}