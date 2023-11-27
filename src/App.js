import './App.css';
import Logo from './Javascript30 Navbar Starter Files/Assets/Logo.svg';
import CapterraLogo from './Javascript30 Navbar Starter Files/Assets/Capterra Logo.svg';
import AlternateLogo from './Javascript30 Navbar Starter Files/Assets/AlternativeTo Logo.svg';
import HeroImage from './Javascript30 Navbar Starter Files/Assets/Hero Image.png';
import ShopifyLogo from './Javascript30 Navbar Starter Files/Assets/Shopify Logo.svg';
import NetflixLogo from './Javascript30 Navbar Starter Files/Assets/Netflix Logo.svg';
import WalmartLogo from './Javascript30 Navbar Starter Files/Assets/Walmart Logo.svg';
import SpotifyLogo from './Javascript30 Navbar Starter Files/Assets/Spotify Logo.svg';
import SpenseIcon from './Javascript30 Navbar Starter Files/Assets/Spense_Icon.svg';
import FiberIcon from './Javascript30 Navbar Starter Files/Assets/Fiber_Icon.svg';
import GradieIcon from './Javascript30 Navbar Starter Files/Assets/Gradie_Icon.svg';
import { useState } from 'react';
function Header() {
  const [dropClicked, setDropClicked] = useState(false);

  function Dropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropClicked) {
      setDropClicked(false);
      dropdownMenu.className = 'dropdown-menu active';
    } else {
      setDropClicked(true);
      dropdownMenu.className = 'dropdown-menu open';
    }
    console.log('clicked');
  }
  return (
    <header className="App-header">
      <nav>
        <img src={Logo} alt='logo' />
        <div className='nav-links'>
          <ul className='nav-ul'>
            <li className='dropdown'>
              <a onClick={Dropdown} href='#'>Products</a>
              <ul id='dropdown-menu' className='dropdown-menu active'>
                <li>
                  <img src={SpenseIcon} alt='image'/>
                  <div className='dropdown-link-text'>
                    <p>Spense</p>
                    <p>Spense is a landing page for writers. Great
                    for practising absolute positioning and flex layouts</p>
                  </div>
                </li>
                <li>
                  <img src={FiberIcon} alt='image'/>
                  <div className='dropdown-link-text'>
                    <p>Fiber Landing Page</p>
                    <p>An online portfolio generator. Great to practice
                    flex/grid layouts, and absolute positioning.</p>
                  </div>
                </li>
                <li>
                  <img src={GradieIcon} alt='image'/>
                  <div className='dropdown-link-text'>
                    <p>Gradie Sign Up Page</p>
                    <p>Gradie is a simple sign up page, great to
                    practice centering layouts.</p>
                  </div>
                </li>
              </ul>
            </li>
            <li><a href='#'>Challanges</a></li>
            <li><a href='#'>Resources</a></li>
            <li><a href='#'>Other Links</a></li>
          </ul>
        </div>
        <div className='login'>
          <a>Sign In</a>
          <a className='unique'>Try for free</a>
        </div>
      </nav>
    </header>
  );
}

function Content() {
  return (
    <div className='content'>
      <div className='content-text'>
        <h1>Ondeck is your remote <span>conference calling tool</span></h1>
        <p>Ondeck is a service that allows you to create beautiful, online, and encrypted video calls for you and your remote team</p>
        <a className='unique'>Try for free</a>
        <div>
          <p>5.0 Rating based on reviews from: </p>
          <img src={CapterraLogo} alt='CapterraLogo' />
          <img src={AlternateLogo} alt='AlternateLogo' />
        </div>
      </div>
      <img src={HeroImage} alt='image' />
    </div>
  );
}

function ContentEnd() {
  return (
    <div className='content-end'>
      <p>Trusted by 3+ million people at companies like</p>
      <div className='company-logos'>
        <img src={NetflixLogo} alt='logo' />
        <img src={ShopifyLogo} alt='logo' />
        <img src={SpotifyLogo} alt='logo' />
        <img src={WalmartLogo} alt='logo' />
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <ContentEnd />
    </div>
  );
}

export default App;
