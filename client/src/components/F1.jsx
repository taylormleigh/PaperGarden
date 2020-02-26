import React from 'react';

export default function F1() {

    return (
      <div id="F1">
        <h1>NEW WORLD</h1>
        <h3>Fill out as much or as little as you like; your world can be edited later.</h3>
        <br />
        <form>
          <label>Name your world</label>
          <br />
          <input 
            type="text" name="worldName" placeholder="world name"></input>
          <br />
        </form>
      </div>
    );
  
}