import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { generateAuthHeader, REALM_GRAPHQL_ENDPOINT} from './RealmClient';
import { GET_ALL_QUESTIONS } from '../database/graphql-queries';


const fetcher = async (query) => {
  fetch(REALM_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: await generateAuthHeader(),
    body: JSON.stringify({ query }),
  }).then((res) => {
    return res.json();
  }).catch((err) => console.error('jinkies! ', err))
}



export default function NewWorld({newRegion, inputs, handleInputChange, handleSubmit}) {

  const {data, error} = useSWR(GET_ALL_QUESTIONS, fetcher)
  console.log(data)
 
  if (error) {
    console.error(error)
    return <div id="F1">useSWR Error!</div>;
  }

  const questions = data ? data.data.questions : null;
  console.log("questions --> ", questions);

  const addWorld = (event) => {
    alert('added!');
    return;
  }

  if (questions) {
    return (
      <div id="F1">
      World Questions:
      {
        data.data.questions.map((section) => {

          return <h2>section.sectionName</h2> + 
            data.data.questions.questions.map((question) => {
              return <div key={question.question}>
                  <h3>{question.question}</h3>
                  <br/><input placeholder={question.placeholder}></input>
                </div>
            })
        
        })

      }
    </div>
    )
  } else {
    return (
      <div id="F1">
        no data :(
      </div>
    );
  }
}