import React from 'react';
import Layout from '../components/layout';

export default function World({index, world, worldView, click, worldName}) {
  // console.log("worldView.jsx: ", world.formfill);
  // var parsed = JSON.parse(world.formfill);
  // var keys = Object.keys(parsed);
  // var values = Object.values(parsed);
  // console.log(parsed);

  return (
    <Layout>
      all the world info!
      <p/>
      <br/>world
      <br/>->region
      <br/>->->City
      <br/>->->city
      <br/>->region
      <br/>->->city
      <br/>->region
      <br/>->region
      <br/>->->city
    </Layout>
  )
}