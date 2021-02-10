import React from 'react';
import Layout from '../components/layout.js';
import Link from 'next/link';

export default function NewCity({prev, inputs, handleInputChange, handleSubmit}) {
  return (
    <Layout>
    <div id="F3">
    <h1>NEW CITY</h1>
      <h3>Add a new city, town, etc. to your region.</h3>
      <br />
    <form onSubmit={()=>{}}>
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
        <Link href="/MyWorlds">
        <button>DONE</button>
          </Link>
      </form>
      </div>
    </Layout>
  )
}