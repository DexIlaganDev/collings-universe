/* eslint-disable */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../components/Header';
import KeyPass from '../../../components/KeyPass';

const App = () => {
  return (
      <div>
        <Header />
        
        <KeyPass />
      </div>
  )
}

export default {
    init() {
      ReactDOM.render(<App />, document.getElementById('root-keypass'))
    },
  };
  