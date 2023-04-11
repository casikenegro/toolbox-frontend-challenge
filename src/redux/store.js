import mainReducer from './reducers'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const middleware = [ thunk ]

const store = createStore(
  mainReducer,
  applyMiddleware(...middleware)
)

export default store