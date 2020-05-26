import React from "react";
import { useRouter } from "next/router";
import Query from "./query";
import LIST_QUERY from "../apollo/queries/list/lists";

const List = () => {
  const router = useRouter();
  return (
    <Query query={LIST_QUERY} id={router.query.id}>
      {({ data: { list } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? list.image.url
            : process.env.API_URL + list.image.url;
        return (
          <div>
            <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
              data-src={imageUrl}
              data-srcset={imageUrl}
              data-uk-img
            >
              <h1>{list.title}</h1>
            </div>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <p>
                  {list.published_date}
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default List;
