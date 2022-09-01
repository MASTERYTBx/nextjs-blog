import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar({children}){
    return(
        <div>
            {children}
            <div className={styles}> 
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="/" className={styles.a}>Home</a></li>
                    <li className={styles.li}><a href="/" className={styles.a}>Services</a></li>
                    <li className={styles.li}><a href="/" className={styles.a}>About Us</a></li>
                    <li className={styles.li}><a href="/" className={styles.a}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}