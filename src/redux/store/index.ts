import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  thunkMiddleware
]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
)

export default function configStore () {
  const store = configureStore({
    reducer: rootReducer
  })
  return store
}
