import React from 'react'
import BrandBlock from './components/brandBlock/BrandBlock'
import { Link } from 'react-router-dom'

export default function Layout({children}) {
  return (
    <main className='main'>
        {children}
        <footer className='bg-oatmeal'>
          <p className='legal'>Copywriter/legal notice, vitae efficitur 
nunc faucibus in. Duis pretium ante in 
vestibulum vulputate. Nulla lobortis nulla 
eget finibus condimentum. Fusce dictum, 
purus et ullamcorper pharetra, leo magna 
laoreet sapien, eget ultricies risus justo at 
sem. Duis pulvinar faucibus erat ac gravida. 
Sed ac tristique ex, in accumsan turpis. Sed 
maximus mi non enim viverra sodales. <Link to="/acfid">ACFID</Link></p>
          <BrandBlock />
        </footer>
    </main>
  )
}

