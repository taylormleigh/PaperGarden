import React from 'react';

export default function Header({worldList, newWorld, goHome}) {

  return (
    <div className="container" id="header">
          <div id="logo"></div>
          <button className="headerButton" onClick={goHome}>HOME</button>
          <button className="headerButton" onClick={worldList}>MY WORLDS</button>
          <button className="headerButton" onClick={newWorld}>CREATE</button>
        </div>
    );
}