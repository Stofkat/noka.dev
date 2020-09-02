
import React from 'react';
import "./style.scss";
import { API_URL } from '../../constants';
import Link from 'react-router-dom/Link';
export default function ArticleHighlighted({ article, index }) {
  const { imageTeaser, title, summary, uri } = article;
  return (
    <div
      className="article-fade-in"
      style={{ animationDelay: 0.05 * (1 + index) + 's' }}
    >
      <div className="article-highlighted">
        <Link className="article-highlighted-link" to={`/articles/${uri}`}>
          {imageTeaser &&
            <img
              src={`${API_URL}${imageTeaser.url}`}
              alt="preview"
              className="image-preview"
            />
          }
          <div className="container-text">
            <h3>{title}</h3>
            <p>{summary}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}