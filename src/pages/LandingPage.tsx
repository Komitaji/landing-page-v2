import React from 'react';
import logo from '../images/landing_page/zesty-logo-with-text.svg';
import Button from '../components/Button';
import '../styles/landing_page.scss';

export default function LandingPage() {
  return (
    <div className='root'>
      <div className='first-part'>
        <nav>
          <div className='left-nav'>
            <img src={logo} alt='logo' />
            <a href='/'>Marketplace</a>
            <a href='/'>Dashboard</a>
            <a href='/'>Governance</a>
          </div>
          <div className='right-nav'>
            <Button secondary={true}>Buy USDC</Button>
            <Button secondary={true}>Network</Button>
            <Button>Connect Wallet</Button>
          </div>
        </nav>
        <div>
          <h1>Marketplace for rentable billboards in the metaverse</h1>
          <p>Zesty Market is a web3-enabled and tokenized advertising marketplace for Internet Communities owned by Internet Communities.</p>
          <div>
            <Button style={{ height: '60px', marginRight: '20px' }}>Launch App</Button>
            <Button secondary={true} style={{ height: '60px' }}>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

