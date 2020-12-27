import React from 'react';
import Link from 'next/link';
import worlds from '../database/testAPI';
import { GET_ALL_QUESTIONS } from '../database/graphql-queries'
import { useQuery, useMutation } from "@apollo/react-hooks";
import axios from 'axios';






export default function NewWorld({inputs, handleInputChange, handleSubmit}) {
  //get all questions
  // const { loading, error, data } = useQuery(GET_ALL_QUESTIONS);

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  // console.log(data);


  axios({
    method: 'GET',
    url: 'https://realm.mongodb.com/api/client/v2.0/app/papergarden-wsdfd/graphql'
  })
  .then((res) => {
    console.log('results: ', res.data);
  })
  .catch((err) => {
    console.error(err);
  })

  return (
    <>
      (Map through and display questions in section)
      {

          //if type is input
          
          //if type is textarea
          
          //if type is dropdown
          
      
      }
    </>
  );
}