import React from 'react'
import Layout from './Layout'
import Header from './components/header/Header'
import MailchimpForm from './components/mailchimpForm/MailchimpForm'
import LogoGrid from './components/logoGrid/LogoGrid'



export default function Acfid() {
    const formCallBack = ( msg = false ) => {
      console.log("CB Yo!", msg)
    }
    return (
        <Layout>
            <Header />
            <section>
                <p>The world is getting hotter, new conflicts are erupting, and inequality is rising. We will squander two decades of global co-operation and progress if we do nothing.</p>
                <p>Decisions made by this generation can put our region and world back on the path to progress, peace and prosperity. </p>
                <p>This is best for the world and best for Australia. But it won’t happen on its own. We must invest to create a safer world for all.</p>
            </section>
            <section className="form-block">
                <MailchimpForm callBack={formCallBack} />
            </section>
            {/*<section>
                <LogoGrid />
            </section>*/ }
        </Layout>
        
    )
}
