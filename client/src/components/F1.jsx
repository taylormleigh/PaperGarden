import React from 'react';

export default function F1({newCity, newRegion, inputs, handleInputChange, handleSubmit}) {
  
  return (
    <div id="F1">
      <h1>NEW WORLD</h1>
      <h3>Fill out as much or as little as you like; your world can be edited later.</h3>
      <br />

      <form onSubmit={handleSubmit}>
        <label>Name your world</label>
        <br />
        <input 
          type="text" 
          name="worldName" 
          placeholder="world name"
          onChange={handleInputChange} 
          value={inputs.worldName}
          ></input>
        <br />
        <button onClick={newCity}>NEW CITY</button>  |  <button type="submit">SAVE</button>  |  <button onClick={newRegion}>NEW REGION</button>
      </form>

    </div>
  );
}