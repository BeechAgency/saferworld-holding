import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Header from './components/header/Header';
import LogoGrid from './components/logoGrid/LogoGrid';

function App() {

  return (
    <Layout>
      <Header 
        displayCTA={false} 
        text='A new campaign making the modern case for Australian Aid.'
      /> 
      {/*<section>
        <LogoGrid />
      </section>*/ }
    </Layout>
  )
}

export default App
