import React from 'react';
import Layout from "../components/layout";
import Link from 'next/link';


export default function Home({newWorld}) {

  return (
    <Layout>
      <div id="home">

          <h1>PAPER & GARDEN</h1>

          <div className="quote"><p /><i>“I think there are two types of writers, the architects and the gardeners. The architects plan everything ahead of time, like an architect building a house. They have the whole thing designed and blueprinted out before they even nail the first board up. The gardeners dig a hole, drop in a seed and water it. As the plant comes up and they water it, they don't know how many branches it's going to have, they find out as it grows."</i>
          <br />-George R.R. Martin</div>

          <p />Paper & Garden is a web service that assists storytellers in developing their setting. Whether you're designing a story or planting it, your locations can be as rich as characters. Each region and city has a unique personality that interacts with your story and the people within it. Help to maintain consistency by saving the details of those places here for easy reference.

          <p/>**Currently this demo is not fully functioning as of 12/2020 due to database migration. Please check back soon, as the site's author does intend to implement the functionality once again.

          <p /><Link href="/Create"><button className="headerButton">BEGIN</button></Link>
          <p />
      </div>
    </Layout>
    );
}