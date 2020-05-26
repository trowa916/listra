import gql from "graphql-tag";

const LISTS_QUERY = gql`
  query Lists {
    lists {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default LISTS_QUERY;
