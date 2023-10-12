import React from 'react'
import BrandBlock from './components/brandBlock/BrandBlock'
import { Link } from 'react-router-dom'

export default function Layout({children}) {
  return (
    <main className='main'>
        {children}
        <footer className='bg-oatmeal'>
          <p className='legal'>Safer World for All is a joint initiative run and funded by agency members of the ACFID Public Engagement and Campaigns Committee and Micah Australia.</p>
          <BrandBlock />
        </footer>
    </main>
  )
}

