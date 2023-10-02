"use client";
import Link from 'next/link'
import styles from './page.module.css'
import {useRouter} from "next/navigation"

export default function Home() {
  const router = useRouter();
  const navigate = (route)=>{
    router.push(route)
  }
  return (
    <main className={styles.main}>
      <h1 className='main'>Routing</h1>
      <h2 className='main'>land</h2>
      <Link href="/login">Login</Link>
      <Link href="/about">About</Link>

      <button onClick={()=>navigate("/login")}>Go to login page</button>
      <button onClick={()=>navigate("/about")}>Go to about page</button>
      <button onClick={()=>navigate("/about/aboutCollage")}>Go to about collage</button>
    </main>
  )
}



