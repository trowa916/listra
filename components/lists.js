import React from "react";
import List from "./list";

const Lists = ({ lists }) => {
  const leftArticlesCount = Math.ceil(lists.length / 5);
  const leftArticles = lists.slice(0, leftArticlesCount);
  const rightArticles = lists.slice(leftArticlesCount, lists.length);
  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((list, i) => {
            return <List list={list} key={`article__${list.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((list, i) => {
              return <List list={list} key={`article__${list.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
