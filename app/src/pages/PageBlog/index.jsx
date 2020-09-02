import React, { Component } from 'react';
import ItemArticle from '../../components/ItemArticle';

import { withAppState } from '../../state/withAppState';

import Articles from '../../state/actions/Articles';
import HeaderTypewriter from '../../components/HeaderTypewriter';


import './style.scss';

class PageBlog extends Component {

  componentDidMount() {
    Articles.listAll();
  }

  render() {
    const { all } = this.props.articles;
    return (
      <div className="page page-blog">
        <div className="container-center">
          <HeaderTypewriter>Noka Blog 📝</HeaderTypewriter>
          <h2 > A collection of interesting new technologies, findings and experimentations.</h2>
        </div>
        <div className="lower-section section-divider">
          <div className="container-blog">
            {
              Object.keys(all).map((key) => {
                const article = all[key];
                return (
                  <ItemArticle
                    key={key}
                    article={article}
                    history={this.props.history}
                  />
                );
              })
            }

          </div>
        </div>

      </div>
    );
  }
}

export default withAppState(PageBlog);
