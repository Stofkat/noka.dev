import React, { Component } from 'react';
import "./style.scss";
import ArticleHighlighted from '../../components/ArticleHighlighted';
import Articles from '../../state/actions/Articles';
import { withAppState } from '../../state/withAppState';
import HeaderTypewriter from '../../components/HeaderTypewriter';

class PageExperiments extends Component {

  componentDidMount() {
    Articles.listCategory('experiments');
  }
  
  render() {

    const { experiments } = this.props.articles;
    const length = Object.keys(experiments).length;

    return (
      <div className="page page-home">
        <div className="container-center">
          <HeaderTypewriter>Experiments 🧪</HeaderTypewriter>
          <p className="introduction">
            Trying out new concepts and techniques
          </p>
        </div>
        <p>
        </p>
        <div className="container-highlighted">
          {
            Object.keys(experiments).map((key, i) => {
              const article = experiments[key];
              return <ArticleHighlighted article={article} index={i} />

            })
          }
        </div>
      </div>
    );
  }
}

export default withAppState(PageExperiments);