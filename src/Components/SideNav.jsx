import React from 'react';

const SideNav = () => {
  return (
    <div className="sidenav">
      <h2>Crypto Hustle</h2>
      <nav>
        <ul>
          <li>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="https://www.cryptocompare.com/" target="_blank" rel="noopener noreferrer">
                  CryptoCompare
                </a>
              </li>
              <li>
                <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
                  CoinMarketCap
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
