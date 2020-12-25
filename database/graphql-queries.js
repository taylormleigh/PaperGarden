import gql from "graphql-tag";

export const getAllQuestions = gql`
  query {
    section {
      _id
      questions
      sectionName
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