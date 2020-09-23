import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Cart } from './pages';
import { Header } from './components';

import './scss/app.scss';

function App() {
  

  return (
    <div className="App">
      <div className="wrapper">
      <Header />
    
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route path='/Cart' component={Cart} />
      </div>

    </div>
    </div>
  );
}

export default App;
