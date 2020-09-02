import { AppStateContainer } from './withAppState';
const merge = require('deepmerge')
/**
 * Describes the full app state, so everything that can be globally used
 */
export default class AppState {
  // Initial state
  static state = {
    articles: {
      all: {},
      work: {},
      experiments: {},
      highlighted: {},
    }
  };

   static async load() {
    try {
      const storedState = JSON.parse(await localStorage.getItem('AppState'));
      AppState.state = merge(AppState.state, storedState);
    } catch (error) {
      console.log('Unable to load previous app state', error);
    }
  }

  static async set(newState, shouldMerge = true) {
    if (!shouldMerge) {
      AppState.state = {
        ...AppState.state,
        ...newState
      };
    } else {
      AppState.state = merge(AppState.state, newState);
    }
    localStorage.setItem('AppState', JSON.stringify(AppState.state));
    AppStateContainer.set(AppState.state);
    // AppStateComponent.set(AppState.state);
  }
}