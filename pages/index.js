import React from "react";
import Lists from "../components/lists";
import Query from "../components/query";
import LISTS_QUERY from "../apollo/queries/list/lists";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={LISTS_QUERY}>
            {({ data: { articles } }) => {
              return <Lists articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
