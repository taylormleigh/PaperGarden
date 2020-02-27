import React from 'react';
// import useSignUpForm from '../CustomHooks';

export default function F2({newCity, newRegion, inputs, handleInputChange, handleSubmit}) {
  return (
    <div id="F2">
      <h1>NEW REGION</h1>
      <h3>Continent, country, etc; any area separated either politically, geographically, or culturally.</h3>
      <br />
      <form onSubmit={handleSubmit}>
      <label>Name your region</label>
      <br />
      <input name="Region Name" 
          onChange={handleInputChange}
          placeholder="region name"></input>
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
      <button onClick={newCity}>NEW CITY</button> 
      </form> 
    </div>
  )
}