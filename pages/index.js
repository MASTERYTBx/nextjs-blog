import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import design from '../styles/index.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home(){
  return(
    <Layout>
      <Navbar>
        <Footer>
        <h1 className={design.title}>
          Welcome to <Link href="/posts/first-post"><a className={design.title}><span className='Styles.span'>Radon Technologies!</span></a></Link>
          <p className={design.p}>Our Prices are so juicy that you've never imagined it 😊</p>
        </h1>
        <Link href="/Products">
          <button className={design.button}>View Products</button>
        </Link>
        </Footer>
      </Navbar>
    </Layout>
  )
}