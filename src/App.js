import React, { Component } from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import BuilderBurger from './containers/BurgerBuilder/BurgerBuilder'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
