import React from 'react';
import logo from '../../images/landing_page/zesty-logo-with-text.svg';
import Button from '../../components/button/Button';
import '../../styles/landing_page.scss';

export default function LandingPage() {
  return (
    <div className="root">
      <div className="first-part">
        <nav>
          <div>
            <img src={logo} alt="logo" />
            <a href="/">Marketplace</a>
            <a href="/">Dashboard</a>
            <a href="/">Governance</a>
          </div>
          <div>
            <Button secondary={true}>Buy USDC</Button>
            <Button secondary={true}>Network</Button>
            <Button>Connect Wallet</Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

