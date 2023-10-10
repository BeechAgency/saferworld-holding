import React from 'react'
import Layout from './Layout'
import Header from './components/header/Header'
import MailchimpForm from './components/mailchimpForm/mailchimpForm'
import LogoGrid from './components/logoGrid/LogoGrid'



export default function Acfid() {
    const formCallBack = ( msg = false ) => {
      console.log("CB Yo!", msg)
    }
    return (
        <Layout>
            <Header />
            <section><p>Integer vulputate urna libero, vitae efficitur 
nunc faucibus in. Duis pretium ante in 
vestibulum vulputate. Nulla lobortis nulla 
eget finibus condimentum. Fusce dictum, 
purus et ullamcorper pharetra, leo magna 
laoreet sapien, eget ultricies risus justo at 
sem. Duis pulvinar faucibus erat ac gravida. 
Sed ac tristique ex, in accumsan turpis. Sed 
maximus mi non enim viverra sodales.</p></section>
            <section className="form-block">
                <MailchimpForm callBack={formCallBack} />
            </section>
            <section>
                <LogoGrid />
            </section>
        </Layout>
        
    )
}
