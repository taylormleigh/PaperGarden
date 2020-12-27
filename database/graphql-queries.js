// import gql from "graphql-tag";
import { gql } from 'apollo-boost';
// import { useQuery, useMutation } from "@apollo/react-hooks";

export const GET_ALL_QUESTIONS = gql`
  query {
    question {
      sectionName
      questions {
        placeholder
        question
        type
      }
    }
  }  
`;

// export const UPDATE_MOVIE = gql`
//   mutation UpdateMovie($query: MovieQueryInput!, $set: MovieUpdateInput!) {
//     updateOneMovie(query: $query, set: $set) {
//       _id
//       title
//     }
//   }
// `;