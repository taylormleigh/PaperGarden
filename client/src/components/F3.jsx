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
          value={inputs.cityName}
          placeholder="city name"></input>
        <br />
        <button onClick={newCity}>NEW CITY</button>  |   <button type="submit">SAVE</button>  |  <button onClick={newRegion}>NEW REGION</button>
      </form>
    </div>
  )
}