import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import design from '../styles/index.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import aboutus from '../styles/aboutus.module.css'
import Image from 'next/image'

export default function Home(){
  return(
    <div>
    <Layout>
      <Navbar>
        <Footer>
          <div>
            <h1>
            About Us
            </h1>
            <p><span className={aboutus.span}>Radon Technologies </span>
            is the best place for spending your money. Products are cheap, reliable with free Service of the Support Team
            
            <h2 className={aboutus.first}>Why Choose Us?</h2>

            We bring our products in the market at a juicy 😋 reliable price! This is our nature to make our
            customers loaded with full of joy and ecstasy! <br></br>
            <div className={aboutus.image}>
              <Image src="/rt_banner.png" height={923} width={1640} />
            </div>

            <h2 className={aboutus.second}>Our Products</h2>
            We always try to roll out with high quality along its <span className={aboutus.span}>game-changer</span> feature which distinguishes us from other
            Roblox Tech Companies. Our marketting is set up in a way that even if we make our products price low, our <span className={aboutus.span}>new 
            stunning products will be starred</span> by our former and new customers.
            </p>
          </div>
        </Footer>
      </Navbar>
    </Layout>
    </div>
  )
}