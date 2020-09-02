import React from 'react';
import AppState from './AppState';

 class AppStateContainer {
  static listeners = {};
  /**
 * Setting the state for all attached UI components
 */
  static set(newState) {
    Object.keys(AppStateContainer.listeners).map((key) => {
      const callback = AppStateContainer.listeners[key];
      if (callback) {
        callback(newState);
      }
    });
  }

  // This function takes a component...
  static withAppState(WrappedComponent) {
    // ...and returns another component wrapper the initial one
    return class extends React.Component {
      listenerId = 0;
      state = { ...AppState.state };
      
      componentDidMount() {
        this.listenerId = new Date().getTime();
        AppStateContainer.listeners[this.listenerId] = this.onStateUpdated.bind(this);
        this.setState({ ...AppState.state });
      }

      componentWillUnmount() {
        delete AppStateContainer.listeners[this.listenerId];
      }

      onStateUpdated(newState) {
        this.setState({ ...newState });
      }

      render() {
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return <WrappedComponent {...this.props}  {...this.state} />;
      }
    };
  }
}
const withAppState = AppStateContainer.withAppState;

export {
  AppStateContainer, 
  withAppState
};

