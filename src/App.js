import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Home, Cart } from './pages';
import { Header } from './components';

import './scss/app.scss';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        setPizzas(data.pizzas);
      });
  }, []);

  console.log(pizzas);

  return (
    <div className="App">
      <div className="wrapper">
      <Header />
    
      <div className="content">
        <Route exact path='/' render={() => <Home items={pizzas} />} />
        <Route path='/Cart' component={Cart} />
      </div>

    </div>
    </div>
  );
}

export default App;
