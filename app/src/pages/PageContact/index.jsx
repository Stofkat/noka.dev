import React, { Component } from 'react';
import { withAppState } from '../../state/withAppState';
import HeaderTypewriter from '../../components/HeaderTypewriter';

import Button from '../../components/buttons/Button';
import Message from '../../state/actions/Contact';

import './style.scss';

class PageContact extends Component {
  state = {
    name: null,
    email: null,
    message: null,
  };

  onSubmit = () => {
    const { name, email, message } = this.state;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      alert("Enter a valid email address");
      return;
    }
    Message.sendMessage(name, email, message, () => {
      this.setState({ name: null, email: null, message: null, messageSent: true });
    });
  }


  render() {
    const { messageSent } = this.state
    return (
      <div className="page page-contact">
        <div className="container-center">
          <HeaderTypewriter>Contact us 📱</HeaderTypewriter>
          <h2 >Feel free to send us a message</h2>
        </div>
        <div className="lower-section section-divider">
          <div className="container-center spaced">
            <p className="introduction">
              If you would like to know more about a project on this website, would like to work together, or have something else to say, we would love to hear it.
            </p>
          </div>
          {!messageSent &&
            <div className="container-form">
              <label>Name</label>
              <input

                onChange={({ target }) => this.setState({ name: target.value })}
                placeholder="Name"
                type="text"
              />
              <label>Email address</label>
              <input
                onChange={({ target }) => this.setState({ email: target.value })}
                placeholder="Email address"
                type="text"
              />
              <label>Message</label>
              <textarea
                onChange={({ target }) => this.setState({ message: target.value })}
              />
              <div className="container-cols">
                <div className="col" />
                <div className="col">
                  <Button title="Send message" onClick={this.onSubmit} />
                </div>
              </div>
            </div>
          }
          {messageSent && <span className="message-sent">Message has been sent! 📨</span>}
        </div>
      </div>
    );
  }
}

export default withAppState(PageContact);
