import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import design from '../styles/index.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {products: data}
  }

}

export default function Home({ products }){
  return(
    <Layout>
      <Navbar>
        <Footer>
          <h1>
           Products [Test Release]
          </h1>
          {products.map(product =>
            <Link href={"/Products/" + product.id} key={product.id}>
              <a className={design.a}>
                <h3>{ product.name + " " + product.username}</h3>
              </a>
            </Link>
          )}
        </Footer>
      </Navbar>
    </Layout>
  )
}