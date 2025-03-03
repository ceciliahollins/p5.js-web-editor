import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './modules/App/components/DevTools';
import rootReducer from './reducers';
import { clearState, loadState } from './persistState';
import getConfig from './utils/getConfig';

export default function configureStore(initialState) {
  const enhancers = [applyMiddleware(thunk)];

  const savedState = loadState();
  clearState();

  const store = createStore(
    rootReducer,
    savedState != null ? savedState : initialState,
    compose(...enhancers)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
