import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { api } from 'src/api';
import { rootEpic, rootReducer } from './root';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || {};

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    api
  }
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? (
    createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(epicMiddleware))
    )
  ) : (
    createStore(
      rootReducer,
      applyMiddleware(epicMiddleware)
    )
  );
  
  

  epicMiddleware.run(rootEpic);

  return store;
}
