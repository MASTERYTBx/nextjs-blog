import styles from './layout.module.css'
import Image from 'next/image'

export default function Layout({  children  }){
    return <div className={styles.container}>{children}</div>
}
