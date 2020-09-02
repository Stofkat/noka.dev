import React, { Component } from 'react';
import Link from 'react-router-dom/Link';


import { withAppState } from '../../state/withAppState';

import Articles from '../../state/actions/Articles';
import HeaderTypewriter from '../../components/HeaderTypewriter';


import './style.scss';
import Button from '../../components/buttons/Button';

class PageContact extends Component {

  render() {
    return (
      <div className="page page-contact">
        <div className="container-center">
          <HeaderTypewriter>Contact us 📱</HeaderTypewriter>
          <h2 >Feel free to send us a message</h2>
          <p className="introduction">
            If you would like to know more about a project on this website, would like to work together, or have something else to say, we would love to hear it.
        </p>
        </div>
        <div className="lower-section section-divider">
          <div className="container-form">
            <div className="container-cols">
              <div className="col">
                <label>Name</label>
                <input placeholder="Name" type="text" />
              </div>
              <div className="col">
                <label>Email address</label>
                <input placeholder="Email address" type="text" />
              </div>
            </div>
            <label>Message</label>
            <textarea />
            <div className="container-cols">
              <div className="col" />
              <div className="col">
                <Button title="Send message" onClick={this.submit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAppState(PageContact);
