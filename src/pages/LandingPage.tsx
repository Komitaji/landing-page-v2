import React, { useState } from 'react';
import Button from '../components/Button';
import styles from '../styles/landing_page.module.scss';
import Image from 'next/image';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.root}>
      <div className={styles.firstPart}>
        <nav>
          <div className={styles.leftNav + (isMenuOpen ? ` ${styles.visible}` : '')}>
            <div className={styles.leftNavImages}>
              <Image src="/images/landing_page/zesty-logo-with-text.svg" alt='logo' height="40px" width="100%" />
              <Image src="/images/landing_page/menu.svg" alt="menu" height="11px" width="24px" className={styles.menu} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
            <a href='/' style={{ marginLeft: '75px' }}>Marketplace</a>
            <a href='/'>Dashboard</a>
            <a href='/'>Governance</a>
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
      <div className={styles.secondPart}>
        <div>
          <Image src="/images/landing_page/illustration-1.svg" alt='Agencies and Individuals' height="500px" width="500px" />
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
          <Image src="/images/landing_page/illustration-2.svg" alt='Virtual Property Owners' height="500px" width="500px" />
        </div>
        <div>
          <Image src="/images/landing_page/illustration-3.svg" alt='Virtual World and Space Creators' height="500px" width="500px" />
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
      <div className={styles.thirdPart}>
        <div className={styles.copyrights}>
          <Image src="/images/landing_page/zesty-logo-with-text-mono.svg" alt="Zesty Logo" height="30px" width="100%" />
          <span>Copyright { new Date().getFullYear() }. All rights reserved.</span>
        </div>
        <div className={styles.links}>
          <div>
            <label>Docs</label>
            <a href="/">Whitepaper</a>
            <a href="/">Doc 2</a>
            <a href="/">Doc 3</a>
          </div>
          <div>
            <label>About</label>
            <a href="/">About</a>
            <a href="/">Help</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </div>
          <div>
            <label>Social</label>
            <a href="/">Twitter</a>
            <a href="/">Telegram</a>
            <a href="/">Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
}

