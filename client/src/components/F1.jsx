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
          name="worldName" 
          placeholder="world name"
          onChange={handleInputChange} 
          ></input>







          
        <br />
        <button onClick={newRegion}>NEW REGION</button>

      </form>

    </div>
  );
}