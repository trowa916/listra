import gql from "graphql-tag";

const LISTS_QUERY = gql`
    query Lists {
    lists {
      id
      title
      categories {
        id
        name
      }
      images {
        url
      }
      published_date
    }
  }
`;

export default LISTS_QUERY;
