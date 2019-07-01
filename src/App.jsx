import React from 'react';
import { connect } from 'react-redux';
import './styles/App.scss';
import Stack from './containers/Stack.jsx';
import Chips from './containers/Chips.jsx';
import Header from './containers/Header.jsx';
import ActionButtons from './containers/ActionButtons.jsx';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <Stack />
      <Chips />
      <ActionButtons />
    </header>
    
    
  </div>
);

export default connect()(App);
