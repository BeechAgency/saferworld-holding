import React from 'react'

const logos = [
  'vite.svg',
  'react.svg',
  'logo1.svg',
  'logo2.svg',
  'logo3.svg',
  'logo4.svg',
  'vite.svg',
  'react.svg',
  'logo1.svg',
  'logo2.svg',
  'logo3.svg',
  'logo4.svg',
  'logo3.svg',
  'logo4.svg',
  'vite.svg',
  'react.svg',
];

export default function LogoGrid() {
  return (
    <div className='logo-grid'>
        <h2>Our Members</h2>

        <div className='grid'>
          {logos.map( logo => {
              return <img src={`/logos/${logo}`} className='logo' loading="lazy" />
          })}
        </div>
    </div>
  )
}
