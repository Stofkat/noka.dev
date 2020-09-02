import React, { Component } from 'react';
import "./style.scss";
import ArticleHighlighted from '../../components/ArticleHighlighted';
import Articles from '../../state/actions/Articles';
import { withAppState } from '../../state/withAppState';
import HeaderTypewriter from '../../components/HeaderTypewriter';

let isFirstView = true;

class PageHome extends Component {
  componentDidMount() {
    Articles.listHighlighted();
    setTimeout(() => {
      isFirstView = false;
    }, 5000);
  }
  render() {

    const { highlighted } = this.props.articles;

    return (
      <div className="page page-home">
        <div className={`container-center  ${isFirstView ? "container-animated" : ""}`}>
          <HeaderTypewriter>A digital playground 🌱</HeaderTypewriter>
          <h2 >Designing innovative digital products from the ground up</h2>

        </div>
        <div className="lower-section section-divider">
          <div className="container-center spaced">
            <p className="introduction">
              At Noka Development we embrace the transition from experimenting with new technologies to  building creative solutions, encorporating them in our every day live.
            </p>
          </div>
          <div className="container-highlighted">
            {
              Object.keys(highlighted).map((key, i) => {
                const article = highlighted[key];
                return <ArticleHighlighted article={article} index={i} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withAppState(PageHome);