import React, { Component } from 'react';
import logo from './logo.svg';
import './home.css';

import Layout from '../../components/layout/';
import Head from '../../components/head/';

class App extends Component {
  render() {
    return (
      <Layout>
        <Head />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Layout>
    );
  }
}

export default App;
