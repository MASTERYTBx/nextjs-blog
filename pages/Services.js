import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import design from '../styles/index.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home({ albums }){
  return(
    <Layout>
      <Navbar>
        <Footer>
          <h1>
            Services
          </h1>
        </Footer>
      </Navbar>
    </Layout>
  )
}