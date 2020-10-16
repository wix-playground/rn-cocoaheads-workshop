declare const window: any

import {SettingsState} from './settings'

export interface State {
  settings: SettingsState
}

const reducers = {
  settings: require('./settings').default,
}

export function createStore() {
  const {createStore, combineReducers} = require('redux')
  const reducer = combineReducers(reducers)
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
}

let createdStore
if (!createdStore) {
  createdStore = createStore()
}
export const store = createdStore
