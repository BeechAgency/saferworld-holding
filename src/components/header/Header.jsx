import React from 'react'
import logo from '../../assets/swfa.svg';
import BrandBlock from '../brandBlock/BrandBlock';
import heroImg from '../../assets/hero.jpg';
import heroImgLandscape from '../../assets/hero-landscape.jpg';

export default function Header({ displayCTA = true }) {
  return (
    <header className='header'>
        <h1 className='logo-wrap'>
          <img src={logo} alt="Safer World For All" />
          <span className='sr-only'>Safer Word For All</span>
        </h1>
        <div className='byline'>
          Integer vulputate urna libero, vitae efficitur nunc faucibus in!
        </div>
        {displayCTA ?
          <div className='take-action'> 
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19.836" viewBox="0 0 22 19.836">
              <g id="Group_31" data-name="Group 31" transform="translate(-8154.5 -667)">
                <path id="Union_1" data-name="Union 1" d="M0,6.832H5.981V0H16.019V6.832H22l-11,13Z" transform="translate(8154.5 667)" fill="#f9b629"/>
              </g>
            </svg>
            Take action now!</h3>
          </div> : '' }
        <BrandBlock />
        <img src={heroImg} className='hero-bg' decorative />
        <img src={heroImgLandscape} className='hero-bg-landscape' decorative />
    </header>
  )
}
