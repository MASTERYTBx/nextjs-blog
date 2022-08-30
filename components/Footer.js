import styles from './footer.module.css'

export default function footer({children}){
    return(
        <div>
            {children}
            <div className={styles.container}>
                <h1 className={styles.container}>© Copyright 2022</h1>
            </div>
        </div>
    )
}