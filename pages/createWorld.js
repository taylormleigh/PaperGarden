import React from 'react';
import Layout from '../components/layout.js';
import Link from 'next/link';
import worlds from '../database/testAPI';
import { render } from 'react-dom';

export default function NewWorld({}){

    return (
      <Layout>
      <div id="F1">
        <h1>NEW WORLD</h1>
        <h3>Fill out as much or as little as you like; your world can be edited later.</h3>
        <br />
      <form onSubmit={()=>{}}>
          <label>Name your world</label>
          <br />
          <input 
            name="WorldName" 
            placeholder="world name"
            // onChange={handleInputChange} 
            ></input>
          <br />
        <h2>PLANET</h2>
          <br />
          <br />
          How many days are in the year?
          <br />
          <input name="Revolution" placeholder="revolution" 
            // onChange={handleInputChange}>
            ></input>
          <br />
          How many hours are in a day?
          <br />
          <input name="Rotation" placeholder="rotation" 
          // onChange={handleInputChange}>
          ></input>
          <br />
          What are the seasons?
          <br />
          <textarea name="Seasons" placeholder="and how long does each season last?" 
          // onChange={handleInputChange}
          ></textarea>
          <br />
          How many suns & moons?
          <br />
          <input name="Satellites" placeholder="do the satellites have names?" 
          // onChange={handleInputChange}
          ></input>

        <h2>LOGIC</h2>
          <br />
          Could this world exist with our current laws of physics or is there a fundamental difference?
          <br />
          <textarea placeholder="spell out the logic if it differs from the universe we know, i.e. magic is real"></textarea>
          <br />
          What quirks about this reality exist?
          <br />
          <textarea placeholder="i.e. physics still hold, but people have gills and can breathe underwater"></textarea>
          <br />
          
        <h2>LIFE</h2>
          <br />
          Describe the intelligent lifeforms that exist on this planet
          <br />
          <textarea placeholder="If more than one race, how and when did each race evolve"></textarea>
          <textarea placeholder="general appearance(s)"></textarea>
          <textarea placeholder="average lifespan(s)"></textarea>
          <textarea placeholder="unique facets, physical and otherwise"></textarea>
          <textarea placeholder="how each interacts with other races"></textarea>

          <br />
          <br />
          <Link href="/createRegion">
            <button type="submit" value="Submit">NEXT: NEW REGION</button>
          </Link>
        </form>
      </div>
      </Layout>
    )
}