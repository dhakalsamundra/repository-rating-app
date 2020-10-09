import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query repositories {
      fullName,
      description,
      language,
      forksCount,
      stargezersCount
  }
`;