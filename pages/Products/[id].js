import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return{
        props: {product: data}
    }
}

export default function Details({ product  }){
    return(
        <Layout>
            <div>
                <h1>Details Page</h1>
                <h3>{product.name}</h3>
                <p>{product.email}</p>
                <p>{product.website}</p>
            </div>
        </Layout>
    )
}