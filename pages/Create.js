import React from 'react';
import CreateWorld from '../components/createWorld.js';
import CreateRegion from '../components/createRegion.js';
import CreateCity from '../components/createCity.js';
import useForm from '../components/CustomHooks.js';
import Layout from '../components/layout.js';
import axios from 'axios';

export default function Form({done, prev, form = 1, newRegion, newCity}) {
//callback function for useForm hook
const signup = () => {
  // alert(`${inputs.worldName} has been saved`)
  var world = inputs;
  axios.post('http://localhost:4321/worlds', world)
  .then((res) => {
    console.log("form.jsx axios post: ", world);
    done();
    // window.location.reload(false);
    // console.log(res);
  })
  .catch((err) => {
    console.error('--> jeepers: ', err);
    // alert("There was a problem adding your world, make sure it doesn't have the same name as a previously created world");
  })
}
//initializes the custom form hook
const {inputs, handleInputChange, handleSubmit} = useForm(signup);


  if (form <=1) {
    return (
      <Layout>
        <CreateWorld 
          prev={prev}
          newCity={newCity}
          newRegion={newRegion}
          inputs={inputs}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}/>
      </Layout>
    );
  } else if (form === 2) {
    return (

      <div className="container">
        <center>
            <F2 
              prev={prev}
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
              prev={prev}
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
          {/* <Results 
            inputs={inputs}
          /> */}
      </center>
    </div>

    );

  }

}