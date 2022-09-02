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
          <h1>
           Contacts
          </h1>

          <Link href="https://discord.gg/f4sZsacb5v">
            <button className={design.button}>Join Discord Server</button>
          </Link>
        </Footer>
      </Navbar>
    </Layout>
  )
}