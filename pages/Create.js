import React from 'react';
// import CreateWorld from './createWorld.js';
import useForm from '../components/CustomHooks.js';
import Layout from '../components/layout.js';

export default class Form() {
//callback function for useForm hook
const signup = () => {
  // alert(`${inputs.worldName} has been saved`)
  var world = inputs;

  //post to mongoDB database eventually
  // axios.post('http://localhost:4321/worlds', world)
  // .then((res) => {
    // console.log("form.jsx axios post: ", world);
    // console.log(res);
    // window.location.reload(false);
    // done();
  // })
  // .catch((err) => {
  //   console.error('--> jeepers: ', err);
    // alert("There was a problem adding your world, make sure it doesn't have the same name as a previously created world");
  // })
}
//initializes the custom form hook
const {inputs, handleInputChange, handleSubmit} = useForm(signup);

return (
      <Layout>
        // <CreateWorld 
        //   inputs={inputs}
        //   handleInputChange={handleInputChange}
        //   handleSubmit={handleSubmit}/>
      </Layout>
    );

}