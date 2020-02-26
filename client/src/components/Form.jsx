import React from 'react';
import F1 from './F1.jsx';
import F2 from './F2.jsx';
import F3 from './F3.jsx';
import Results from './Results.jsx';

export default function Form({form, next, prev, done, newRegion, newCity}) {
  if (form <=1) {
    return (
      
      <div className="container">
        <center>
            <F1 />
            <button onClick={newCity}>NEW CITY</button>  |  <button onClick={done}>DONE</button>  |  <button onClick={newRegion}>NEW REGION</button>
        </center>
      </div>
    );
  } else if (form === 2) {
    return (

      <div className="container">
      <center>
          <F2 />
          <button onClick={newCity}>NEW CITY</button>  |  <button onClick={done}>DONE</button>  |  <button onClick={newRegion}>NEW REGION</button>
        </center>
      </div>

    );
  } else if (form === 3) {
    return (

      <div className="container">
      <center>
          <F3 />
          <button onClick={newCity}>NEW CITY</button>  |  <button onClick={done}>DONE</button>  |  <button onClick={newRegion}>NEW REGION</button>
        </center>
      </div>

    );
  } else {

    return (

      <div className="container">
      <center>
          <Results />
          <button onClick={newCity}>NEW CITY</button>  |  <button onClick={done}>DONE</button>  |  <button onClick={newRegion}>NEW REGION</button>
      </center>
    </div>

    );

  }

}