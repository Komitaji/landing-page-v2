import React, { useState } from 'react';
import Button from '../components/Button';
import styles from '../styles/landing_page.module.scss';
import Image from 'next/image';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const marketplaceUrl = 'https://app.zesty.market/';
  const documentsUrl = 'https://docs.zesty.market/';
  const whitepaperUrl = 'https://docs.zesty.market/about/litepaper';
  function openUrl(url: string) {
    window.open(url);
  }
  function openMenu(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.stopPropagation();
    setIsMenuOpen(true);
  }
  return (
    <div className={styles.root} onClick={() => setIsMenuOpen(false)}>
      <div className={styles.firstPart}>
        <nav>
          <div className={styles.leftNav + (isMenuOpen ? ` ${styles.visible}` : '')}>
            <div className={styles.leftNavImages}>
              <Image src="/images/landing_page/zesty-logo-with-text.svg" alt='logo' height="40px" width="100%" />
              <div onClick={openMenu} style={{ padding: '10px', cursor: 'pointer', marginRight: '-10px' }}>
                <Image src="/images/landing_page/menu.svg" alt="menu" height="11px" width="24px" className={styles.menu}  />
              </div>
            </div>
            <div className={styles.menuContent}>
              <a href={marketplaceUrl} style={{ marginLeft: '75px' }} target="_blank" rel="noopener noreferrer">Marketplace</a>
              <a href='https://blog.zesty.market/' target="_blank" rel="noopener noreferrer">Blog</a>
              <a href={whitepaperUrl} target="_blank" rel="noopener noreferrer">Litepaper</a>
              <a href='https://duneanalytics.com/limbofeather/zestymarket' target="_blank" rel="noopener noreferrer">Stats</a>
              <a href='https://gov.zesty.market/' target="_blank" rel="noopener noreferrer">Governance</a>
            </div>
          </div>
        </nav>
        <div>
          <h1>Marketplace for rentable billboards in the metaverse</h1>
          <p>Zesty Market is a web3&#8209;enabled and tokenized advertising marketplace for Internet Communities owned by Internet Communities.</p>
          <div>
            <Button style={{ height: '60px', marginRight: '20px' }} onClick={() => openUrl(marketplaceUrl)}>Launch App</Button>
            <Button secondary={true} style={{ height: '60px' }} onClick={() => openUrl(documentsUrl)}>Learn more</Button>
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
        <div className={styles.secondIllustration}>
          <Image src="/images/landing_page/illustration-2.svg" className={styles.showOnMobile} alt='Virtual Property Owners' height="500px" width="500px" />
          <div>
            <h1>Virtual Property Owners</h1>
            <label>
              Virtual Property Owners can further monetize and increase the value of their properties by renting out ad spaces
            </label>
            <p>
              Generate revenue from billboard space rental. Control how and where billboards are displayed. Leverage ad visibility and revenue data to demonstrate property value.
            </p>
          </div>
          <div className={styles.hideOnMobile}><Image src="/images/landing_page/illustration-2.svg" alt='Virtual Property Owners' height="500px" width="500px" /></div>
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
        <div className={styles.secondPartActionButton}>
          <Button onClick={() => openUrl(marketplaceUrl)}>Launch App</Button>
        </div>
      </div>
      <div className={styles.thirdPart}>
        <div className={styles.copyrights + ' ' + styles.hideOnMobile}>
          <Image src="/images/landing_page/zesty-logo-with-text-mono.svg" alt="Zesty Logo" height="30px" width="100%" />
          <span>Copyright { new Date().getFullYear() }. All rights reserved.</span>
        </div>
        <Image src="/images/landing_page/zesty-logo-with-text-mono.svg" className={styles.showOnMobile} alt="Zesty Logo" height="30px" width="100%" />
        <div className={styles.links}>
          <div>
            <label>Docs</label>
            <a href={whitepaperUrl} target="_blank" rel="noopener noreferrer">Whitepaper</a>
          </div>
          <div>
            <label>About</label>
            <a href="/" target="_blank" rel="noopener noreferrer">About</a>
            <a href="/" target="_blank" rel="noopener noreferrer">Help</a>
            <a href="/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="/" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          </div>
          <div>
            <label>Social</label>
            <a href="https://twitter.com/zestymarket" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://discord.gg/4Jc3XhM5mp" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
        <div className={styles.copyrights + ' ' + styles.showOnMobile}>
          <span>Copyright {new Date().getFullYear()}. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

