import React from 'react'
import Layout from './Layout'
import Header from './components/header/Header'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <Layout>
        <Header displayCTA={false} />
        <section>
          <p>This page doesn't exist. <Link to='/acfid'>Back home.</Link>
          </p>
        </section>
    </Layout>
  )
}
