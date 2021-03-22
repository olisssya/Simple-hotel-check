import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import watcher from './sagas/mySaga'
import rootReducer from './reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watcher)

// subscribe store to local storage
store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem("state", JSON.stringify(state));
});

export default store;