import Layout from '../components/notfoundlayout'
import customs from '../styles/custom.module.css'

export default function NotFound(){
    return(
        <Layout>
            <div>
                <h1><span className={customs.notfound}>404</span></h1>
                <h3>Not Found</h3>
                <p className={customs.p}>This Page doesn't exist.<br></br><a href='/' className={customs.gobacktohome}>← Back to home</a></p>
            </div>
        </Layout>
    )
 
}