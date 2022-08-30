import { Component } from 'react'
import styles from './notfound.module.css'

export default function Layout({  children  }){
    return <div className={styles.container}>{children}</div>
}