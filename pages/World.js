import React from 'react';
import Layout from '../components/layout';

export default function World({worldIndex}) {
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
      <br/>->world.region
      <br/>->->region.city
      <br/>->->region.city
      <br/>->world.region
      <br/>->->region.city
      <br/>->world.region
      <br/>->world.region
      <br/>->->region.city
    </Layout>
  )
}