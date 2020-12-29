

export const GET_ALL_QUESTIONS = `
  query {
    questions {
      sectionName
      questions {
        question
        placeholder
        type
      }
    }
  }
}`;

// export const UPDATE_MOVIE = gql`
//   mutation UpdateMovie($query: MovieQueryInput!, $set: MovieUpdateInput!) {
//     updateOneMovie(query: $query, set: $set) {
//       _id
//       title
//     }
//   }
// `;