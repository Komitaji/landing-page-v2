import React from 'react';
import logo from '../images/landing_page/zesty-logo-with-text.svg';
import illustration1 from '../images/landing_page/illustration-1.svg';
import illustration2 from '../images/landing_page/illustration-2.svg';
import illustration3 from '../images/landing_page/illustration-3.svg';
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
          <p>Zesty Market is a web3&#8209;enabled and tokenized advertising marketplace for Internet Communities owned by Internet Communities.</p>
          <div>
            <Button style={{ height: '60px', marginRight: '20px' }}>Launch App</Button>
            <Button secondary={true} style={{ height: '60px' }}>Learn more</Button>
          </div>
        </div>
      </div>
      <div className='second-part'>
        <div>
          <img src={illustration1} alt='Agencies and Individuals' />
          <div>
            <h1>Agencies and Individuals</h1>
            <label>
              Agencies and individuals can create and deploy data&#8209;rich multiversal compaigns across virtual worlds both on and off&#8209;chain
            </label>
            <p>
              Reach an audience of over 500,000 visitors in the metaverse each month. Advertisers see an average click&#8209;through rate of 12%. Measure ad performance with real time data.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1>Virtual Property Owners</h1>
            <label>
              Virtual Property Owners can further monetize and increase the value of their properties by renting out ad spaces
            </label>
            <p>
              Generate revenue from billboard space rental. Control how and where billboards are displayed. Leverage ad visibility and revenue data to demonstrate property value.
            </p>
          </div>
          <img src={illustration2} alt='Virtual Property Owners' />
        </div>
        <div>
          <img src={illustration3} alt='Virtual World and Space Creators' />
          <div>
            <h1>Virtual World and Space Creators</h1>
            <label>
              Virtual World and Space Creators can create a seamless and non&#8209;intrusive advertising experience for their users while increasing total world value
            </label>
            <p>
              On&#8209;chain revenue stats ensure transparency and reduce ad fraud. Our open&#8209;source SDK is easy to integrate with most worlds and spaces. Dashboards to manage multiple spaces at once.
            </p>
          </div>
        </div>
        <div style={{ justifyContent: 'center' }}>
          <Button style={{ width: '320px', height: '80px', marginBottom: '100px', position: 'relative', top: '200px'}}>Launch App</Button>
        </div>
      </div>
    </div>
  );
}

