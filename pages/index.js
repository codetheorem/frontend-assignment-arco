import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Typography } from '@arco-design/web-react';
import Hero from '../assets/images/home.webp';



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>            
        <Typography.Title bold style={{fontSize: '5rem'}}>Build Something Amazing</Typography.Title> 
      </div>
      <div className={styles.description}>
        <Typography.Title heading={5} disabled style={{fontSize: '2rem'}}>Must today firm from bag. Investment try cold a when capital. Everything wait person service.</Typography.Title>
      </div>
      <div>
        <Image src={Hero} alt="hero" style={{borderRadius: '10px'}} />
      </div>
    </div>
  )
}
