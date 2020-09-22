import React from 'react';

import Button from '../Button/Button';

import logoSvg from '../../assets/img/pizza-logo.svg';

function Header() {
    const onButtonClick = () => {
      alert('132');
    }

    return (
        <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          
          <Button onClick={onButtonClick}>123</Button>

        </div>
        </div>
    );
}

export default Header;