import React from 'react';
import F1 from './F1.jsx';
import F2 from './F2.jsx';
import F3 from './F3.jsx';
import Results from './Results.jsx';
import useSignUpForm from '../CustomHooks';

export default function Form({form, next, prev, done, newRegion, newCity}) {
//callback function for useSignUpForm hook
const signup = () => {
  alert(`${inputs.worldName} has been saved`)
}
//initializes the custom form hook
const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);


  if (form <=1) {
    return (
      
      <div className="container">
        <center>
            <F1 
              newCity={newCity}
              newRegion={newRegion}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}/>
        </center>
      </div>
    );
  } else if (form === 2) {
    return (

      <div className="container">
        <center>
            <F2 
              newCity={newCity}
              newRegion={newRegion}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}/>
        </center>
      </div>

    );
  } else if (form === 3) {
    return (

      <div className="container">
        <center>
            <F3 
              newCity={newCity}
              newRegion={newRegion}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}/>
        </center>
      </div>

    );
  } else {

    return (

      <div className="container">
      <center>
          <Results 
            inputs={inputs}
          />
      </center>
    </div>

    );

  }

}