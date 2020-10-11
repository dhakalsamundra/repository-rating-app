import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query{
    repositories{
      edges{
        node{
        fullName,
        ownerAvatarUrl,
        description,
        language,
        forksCount,
        ratingAverage,
        reviewCount,
        stargazersCount
        }
      }
    }
  }
`;
