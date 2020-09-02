import React, { Component, Fragment } from 'react';
import Link from 'react-router-dom/Link';
import showdown from "showdown";
import { withAppState } from '../../state/withAppState';
import './style.scss';

import Articles from '../../state/actions/Articles';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class PageArticle extends Component {
  constructor(props) {
    super(props);
    const { articles } = this.props;
    const articleURI = window.location.pathname.split('/')[2];
    Articles.setArticle(articleURI);
    if (Object.keys(articles.all).length === 0) {
      Articles.listAll();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const converter = new showdown.Converter();
    const { articles } = this.props;
    const { currentArticle } = articles;
    const article = (articles.all && currentArticle) ?
      articles.all[articles.currentArticle] : null;

    return (
      <div className="page page-article">
        {article &&
          <div className="container-small">
            <div className="header">
              <span
                className="button-back"
                onClick={() => { this.props.history.goBack() }}
              >
                <FontAwesomeIcon size="1x" icon={faArrowLeft} />
                <span className="text-button-back">Back to index</span>
              </span>
              <h1>{article.title}</h1>
              {article.date &&
                <span className="date">
                  <img src={require("../../assets/img/calendar.svg")} />
                  {new Date(article.publishDate).toLocaleDateString()}
                  <br /><br />
                </span>
              }
            </div>
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: converter.makeHtml(article.body) }}
            />
          </div>
        }
      </div>
    );
  }
}

export default withAppState(PageArticle);