import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Timer from './components/Timer';
import reducer from './reducer';

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}