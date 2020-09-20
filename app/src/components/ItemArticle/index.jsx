import React from "react";
import Link from "react-router-dom/Link";
import showdown from "showdown";

import "./style.scss";
import { API_URL } from "../../constants";

// Shorten a string to less than maxLen characters without truncating words.
function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}
const MAX_LENGTH = 200;
export default function ItemArticle({ article }) {

  let { summary, body, title, uri, imageTeaser } = article;
  if (!summary) {
    summary = `${shorten(body || "", MAX_LENGTH)} ... `;
  }
  const converter = new showdown.Converter();

  summary = converter.makeHtml(summary);

  return (
    <div className="item-article">
      <Link to={`/articles/${uri}`}>
        {article.publishDate &&
          <span className="date">
            <img alt="date" src={require("../../assets/img/calendar.svg")} />
            {new Date(article.publishDate).toLocaleDateString()}
          </span>
        }
        <div>
          <h3>{title}</h3>

        </div>
        <div className="container-content">
          {imageTeaser &&
            <img
              src={`${API_URL}${imageTeaser.url}`}
              alt="preview"
              className="image-preview"
            />
          }
          <div className="article-body" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </Link>
    </div >
  );
}


