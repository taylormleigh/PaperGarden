import React from 'react';
import Layout from './layout.js';
import Link from 'next/link';
import worlds from '../database/testAPI';
import { render } from 'react-dom';

export default class NewWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formID: 1
    }
    this.addWorld = this.addWorld.bind(this)
  }

  addWorld () {
    // alert('added!');
    // return;
    this.setState({formID: this.state.formID+1})
  }
  

  render() {

  
  if (this.state.formID === 1) {

    return (
      <div id="F1">
        <h1>NEW WORLD</h1>
        <h3>Fill out as much or as little as you like; your world can be edited later.</h3>
        <br />

        <form onSubmit={this.addWorld}>

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
          {/* <Link href="/MyWorlds"> */}
            <button type="submit" value="Submit">NEXT: NEW REGION</button>
          {/* </Link> */}
        </form>
      </div>
    )
  } else if (this.state.formID === 2) {
    return(
      <div id="F2">

      <form onSubmit={this.addWorld}>
      <h1>NEW REGION</h1>
      <h3>Continent, country, etc; any area separated either politically, geographically, or culturally.</h3>
      <br />
      Name your region
      <br />
      <input placeholder="region name"></input>
      <br />
      <h2>GEOGRAPHY</h2>
      <br />
      Where is this region located within your world?
      <br />
      <input placeholder="northern hemisphere by equator"></input>
      <br />
      What type of habitat is it?
      <br />
      <select className="dropdown">
        <option value = "1">Desert</option>
        <option value = "2">Tundra</option>
        <option value = "3">Grassland</option>
        <option value = "4">Forest</option>
        <option value = "4">Forest</option>
        <option value = "5">Rainforest</option>
        <option value = "6">Wetland</option>
        <option value = "7">Aquatic</option>
      </select>
      <br />
      What is the climate?
      <br />
      <select className="dropdown">
        <option value = "1">Dry</option>
        <option value = "2">Polar</option>
        <option value = "3">Continental</option>
        <option value = "4">Temperate</option>
        <option value = "4">Tropical</option>
      </select>
      <br />
      What is unique about the weather in this region?
      <br />
      <textarea placeholder="prone to tornados, extreme temperature, will go from sunny to storming on a dime, etc."></textarea>
      <br />
      What are the most notable points of geography?
      <br />
      <textarea placeholder="mountains, bodies of water, volcanoes, etc."></textarea>
      <br />
      <h2>FLORA & FAUNA</h2>
      <br />
      What are the richest natural resources of this area?
      <br />
      <input placeholder="minerals, crops, materials, etc."></input>
      <br />
      What resources are most scarce?
      <br />
      <input placeholder="water, wildlife, fertile land, etc."></input>
      <br />
      <h2>POPULATION</h2>
      <br />
      How do the weather and geography influence society in this region?
      <br />
      <textarea placeholder="legends, lore, superstitions, etc."></textarea>
      <br />
      What are the greatest dangers?
      <br />
      <input placeholder="predators, weather, politics, etc."></input>
      <br />
      How does intelligent life interact with specific animal species?
      <br />
      <textarea placeholder="worshipping cats, hunting birds, living peacefully alongside tarantulas, etc."></textarea>
      <br />
      How is society structured in this region?
      <br />
      <textarea placeholder="tribal, matriarchal, socialist, etc."></textarea>
      <br />
      What is the population like?
      <br />
      <input placeholder="density, distribution, races, etc."></input>
      <br />
      Is there a dominant religion/belief system?
      <br />
      <input placeholder="monotheistic, Judaism, blood magic, etc."></input>
      <br />
      What about this region is completely unique to the rest of the world?
      <br />
      <textarea placeholder="language, customs, clothing, etc."></textarea>
      <br />
      What discriminations exist?
      <br />
      <textarea placeholder="race, class, eye color, etc."></textarea>
      <br />
      What are the naming conventions?
      <br />
      <input placeholder="patrilineal, descriptive, familial, etc."></input>
      <br />
      What are the settlement patterns of this area?
      <br />
      <input placeholder="nomadic, sedentary, communal, rural, etc."></input>
      <br />
      What is the appearance of the race/s that inhabit this region?
      <br />
      <textarea placeholder="skin tone, eye color, build, etc."></textarea>
      <br />
      <h2>TECHNOLOGY</h2>
      <br />
      What are the most common ways of transport?
      <br />
      <textarea placeholder="roads, water, air, etc."></textarea>
      <br />
      What are the means of communication in this region?
      <br />
      <textarea placeholder="technology by, control of, storage of information, etc."></textarea>
      <br />
      What are the primary sources of energy?
      <br />
      <textarea placeholder="fossil fuel, manual labor, magic, etc."></textarea>
      <br />

      <h2>FOOD AND WASTE</h2>
      <br />
      What foods/dishes is this region known best for?
      <br />
      <textarea placeholder="gumbo, blueberries, etc."></textarea>
      <br />
      What importance does food play within class, race, job, etc?
      <br />
      <textarea placeholder="expensive dishes, racial customs, etc."></textarea>
      <br />
      If there is alcohol or something similar, what are the regional customs that surround it?
      <br />
      <textarea placeholder="e.g. sweet-potato vodka is only for celebrations"></textarea>
      <br />
      Are there any forbidden foods? Who are they forbidden to?
      <br />
      <textarea placeholder="e.g. a dish uses a competing region's primary resource and is forbidden in this region"></textarea>
      <br />
      How is waste managed in general?
      <br />
      <textarea placeholder="public systems, private management, a giant pile of trash, etc."></textarea>
      <br />
      Are there any quirks about the sanitary customs in this region?
      <br />
      <textarea placeholder="Sunday shower tradition, use of bath oils, personal handkerchiefs, etc."></textarea>
      <br />
      <h2>RELIGION</h2>
      <br />
      What is the main practice of this region?
      <br />
      <textarea placeholder="monotheism, polytheism, atheism, etc."></textarea>
      <br />
      What are some of the specific religions common to this region?
      <br />
      <textarea placeholder="Judaism, Worship of the Seven, etc."></textarea>
      <br />
      What are some of the festivals and holidays of each religion?
      <br />
      <textarea placeholder="Christmas, Mardi Gras, etc."></textarea>
      <br />
      What are the primary deities of each religion?
      <br />
      <textarea placeholder="gods & godesses, saints, etc."></textarea>
      <br />
      What are the differing views on the afterlife?
      <br />
      <textarea placeholder="heaven, hell, reincarnation, etc."></textarea>
      <br />
      What are the regional superstitions and customs?
      <br />
      <textarea placeholder="hold breath over a bridge, black-eyed-peas for good luck, etc."></textarea>
      <br />
      <h2>WAR</h2>
      <br /> ... coming soon ...
      <br />
      <h2>HISTORY</h2>
      <br /> ... coming soon ...
      <br />
      <h2>MEDICAL</h2>
      <br /> ... coming soon ...
      <br />
      <h2>LANGUAGE</h2>
      <br /> ... coming soon ...
      <br />
      <h2>REGIONAL GOVERNMENT</h2>
      <br /> ... coming soon ...
      <br />
      <h2>EDUCATION</h2>
      <br /> ... coming soon ...
      <br />
      <h2>ENTERTAINMENT</h2>
      <br /> ... coming soon ...
      <br />
      <h2>ECONOMY</h2>
      <br /> ... coming soon ...
      <br />
      <h2>CULTURE</h2>
      <br /> ... coming soon ...


      <br />
          <br />
          {/* <Link href="/MyWorlds"> */}
            <button type="submit" value="Submit">NEXT: NEW CITY</button>
          {/* </Link> */}
        </form>
    </div>
    )
  } else if (this.state.formID === 3) {
    return(
      <div id="F3">
      <h1>NEW CITY</h1>
      <h3>Add a new city, town, etc. to your region.</h3>
      <br />
      <form onSubmit={this.addWorld}>
        <label>Name your city</label>
        <br />
        <input 
          type="text" 
          name="City Name" 
          // value={inputs["City Name"]}          
          // onChange={handleInputChange} 
          placeholder="city name"></input>
<h2>POPULATION</h2>
      <br />
      How do the weather and geography influence society in this region?
      <br />
      <textarea placeholder="legends, lore, superstitions, etc."></textarea>
      <br />
      What are the greatest dangers?
      <br />
      <input placeholder="predators, weather, politics, etc."></input>
      <br />
      How does intelligent life interact with specific animal species?
      <br />
      <textarea placeholder="worshipping cats, hunting birds, living peacefully alongside tarantulas, etc."></textarea>
      <br />
      How is society structured in this region?
      <br />
      <textarea placeholder="tribal, matriarchal, socialist, etc."></textarea>
      <br />
      What is the population like?
      <br />
      <input placeholder="density, distribution, races, etc."></input>
      <br />
      Is there a dominant religion/belief system?
      <br />
      <input placeholder="monotheistic, Judaism, blood magic, etc."></input>
      <br />
      What about this region is completely unique to the rest of the world?
      <br />
      <textarea placeholder="language, customs, clothing, etc."></textarea>
      <br />
      What discriminations exist?
      <br />
      <textarea placeholder="race, class, eye color, etc."></textarea>
      <br />
      What are the naming conventions?
      <br />
      <input placeholder="patrilineal, descriptive, familial, etc."></input>
      <br />
      What are the settlement patterns of this area?
      <br />
      <input placeholder="nomadic, sedentary, communal, rural, etc."></input>
      <br />
      What is the appearance of the race/s that inhabit this region?
      <br />
      <textarea placeholder="skin tone, eye color, build, etc."></textarea>
      <br />
      <h2>TECHNOLOGY</h2>
      <br />
      What are the most common ways of transport?
      <br />
      <textarea placeholder="roads, water, air, etc."></textarea>
      <br />
      What are the means of communication in this region?
      <br />
      <textarea placeholder="technology by, control of, storage of information, etc."></textarea>
      <br />
      What are the primary sources of energy?
      <br />
      <textarea placeholder="fossil fuel, manual labor, magic, etc."></textarea>
      <br />

      <h2>FOOD AND WASTE</h2>
      <br />
      What foods/dishes is this region known best for?
      <br />
      <textarea placeholder="gumbo, blueberries, etc."></textarea>
      <br />
      What importance does food play within class, race, job, etc?
      <br />
      <textarea placeholder="expensive dishes, racial customs, etc."></textarea>
      <br />
      If there is alcohol or something similar, what are the regional customs that surround it?
      <br />
      <textarea placeholder="e.g. sweet-potato vodka is only for celebrations"></textarea>
      <br />
      Are there any forbidden foods? Who are they forbidden to?
      <br />
      <textarea placeholder="e.g. a dish uses a competing region's primary resource and is forbidden in this region"></textarea>
      <br />
      How is waste managed in general?
      <br />
      <textarea placeholder="public systems, private management, a giant pile of trash, etc."></textarea>
      <br />
      Are there any quirks about the sanitary customs in this region?
      <br />
      <textarea placeholder="Sunday shower tradition, use of bath oils, personal handkerchiefs, etc."></textarea>
      <br />

        <br />  
        <br />
        <Link href="/MyWorlds">
        <button>DONE</button>
          </Link>
      </form>
      </div>
    )
  }
}
}