import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './makeStore';

import { containers as duckContainers } from './duck';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={createStore()}>
        <Router>
          <div>
            < duckContainers.DuckContainer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
