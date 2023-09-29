import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <User name="anil"/>
      <h1>Home page</h1>
    </main>
  )
}

const User = (props)=>{
  return(
    <div>
      <h2>User Name is {props.name}</h2>
    </div>
  )
}


