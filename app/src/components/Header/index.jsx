import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu'

import ButtonIcon from '../buttons/ButtonIcon';
import { ICON } from '../Icon';

import './style.scss';

const MOBILE_WIDTH = 1024;

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      isMenuOpen: false,
    };

    this.state.windowWidth = window.innerWidth;
    window.onresize = () => {
      if (window.innerWidth != this.state.innerWidth) {
        this.setState({ windowWidth: window.innerWidth });
      }
    };


    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // if (window.scrollY > 100 && window.scrollY > this.lastScrollY) {
    //   this.headerRef.style.top = '-55px';
    // } else if (window.scrollY < this.lastScrollY) {
    //   this.headerRef.style.top = '0';
    // }

    // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //   this.headerRef.style.top = '0';
    // }
    // this.lastScrollY = window.scrollY;
  }

  closeMenu() {
    this.setState({ sidebarOpen: false });
  }

  installToDesktop() {
    //Trigger the installation prompt
    this.deferredPrompt.prompt();
  }



  renderLogo() {
    return (
      <div className="header-logo">
        <img
          src={require('../../assets/img/logo.svg')}
          className="logo"
          alt="logo"
        />
        <h1 className="App-title">noka.dev</h1>
      </div>
    );
  }

  onSetSideBarOpen = () => {
    this.setState({ sidebarOpen: true });
  }

  toggleSideBar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  renderMenuItems() {
    return (
      <Fragment>
        {/* <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/work">
          Work
        </Link> */}
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/">
          Home
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/blog">
          Blog
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/contact">
          Contact
        </Link>
      </Fragment>
    );
  }
  render() {

    return (
      <Fragment>
        <header ref={(ref) => { this.headerRef = ref }} className="App-header">
          <Link to="/">
            {this.renderLogo()}
          </Link>
          {this.state.windowWidth > MOBILE_WIDTH &&
            <div className="container-menu-items-desktop">
              <div>
                {this.renderMenuItems()}
              </div>
            </div>
          }
          {this.state.windowWidth <= MOBILE_WIDTH &&
            <Fragment>
              <div className="container-buttons">
                <ButtonIcon
                  icon={this.state.sidebarOpen ? ICON.close : ICON.menu}
                  onClick={this.toggleSideBar}
                />
              </div>
              <div className={`sidebar ${this.state.sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
                {this.renderMenuItems()}
              </div>
            </Fragment>

          }
        </header>
      </Fragment>
    );
  }
}

export default Header;
