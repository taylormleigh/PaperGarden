import React from 'react';

export default function F3({newCity, newRegion, inputs, handleInputChange, handleSubmit}) {
  
  return (
    <div id="F3">
      <h1>NEW CITY</h1>
      <h3>Add a new city to *Region*</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name your city</label>
        <br />
        <input 
          type="text" 
          name="cityName" 
          onChange={handleInputChange} 
          placeholder="city name"></input>
        <br />
        <button type="submit">DONE</button>
      </form>
    </div>
  )
}