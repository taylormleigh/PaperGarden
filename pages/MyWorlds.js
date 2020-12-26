import React from 'react';
import Layout from '../components/layout';
import WorldList from '../components/worldList';

export default function MyWorlds(props) {
  // console.log(props);
  return (
    <Layout>
        <h1>My Worlds</h1>
          <WorldList/>
    </Layout>
  )
}