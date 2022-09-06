import styles from './footer.module.css'

export default function footer({children}){
    return(
        <div>
            {children}
            <div className={styles.container}>
                <h1 className={styles.container}>© Copyright 2022 <br></br> Developed by <span className={styles.span}>@Surfdo <br></br> ⚠️BETA RELEASE</span></h1>
            </div>
        </div>
    )
}
