import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { generateAuthHeader, REALM_GRAPHQL_ENDPOINT } from './RealmClient';
import { GET_ALL_QUESTIONS } from '../database/graphql-queries'

const fetcher = async (query) => {
  fetch(REALM_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: await generateAuthHeader(),
    body: JSON.stringify({ query }),
  }).then((res) => res.json()).catch((err) => console.error('jinkies! ', err))
}




export default function NewWorld({newRegion, inputs, handleInputChange, handleSubmit}) {

  const {data} = useSWR(GET_ALL_QUESTIONS, fetcher)

  if (data && data.error) {
    console.error(data.error)
    return <>Error!</>;
  }

  const questions = data ? data.data.questions : null;
  console.log(questions);

  const addWorld = (event) => {
    alert('added!');
    return;
  }

  return (
    <div id="F1">
      Map through questions
    </div>
  );
}