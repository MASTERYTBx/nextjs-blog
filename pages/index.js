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
          <p className={design.p}>This our official website</p>
        </h1>
        <button className={design.button}>Read Bio</button>
        </Footer>
      </Navbar>
    </Layout>
  )
}