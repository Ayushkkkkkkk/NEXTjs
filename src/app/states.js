'use client';


import { useState } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [name , setName] =useState("anil")
  const app = ()=> {
    setName("siddhu")
  }

  const InnerComp=()=>{
    return(
      <h1>Inner comp</h1>
    )
  }
  return (
    <main className={styles.main}>
      
      <h1>Events, function , state , {name}</h1>
      <button onClick={()=>app()}>CLick mge</button>
      <InnerComp/>
    </main>
  )
}



