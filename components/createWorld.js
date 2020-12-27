import React from 'react';
import Link from 'next/link';
import worlds from '../database/testAPI';
import { GET_ALL_QUESTIONS } from '../database/graphql-queries'
import { useQuery, useMutation } from "@apollo/react-hooks";

//import mongoDB SDK
// import * as Realm from 'realm-web';

//connect to Realm app
// const REALM_APP_ID = "papergarden-wsdfd";
// const app = new Realm.App({ id: REALM_APP_ID });


export default function NewWorld({inputs, handleInputChange, handleSubmit }) {
  //get all questions
  const { loading, error, data } = useQuery(GET_ALL_QUESTIONS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      (Map through and display questions in section)
      {
        data.sectionName
          //if type is input
          
          //if type is textarea
          
          //if type is dropdown
          
      
      }
    </>
  );
}