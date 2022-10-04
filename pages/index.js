import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <Link href="/profile">
        <a>profile</a>
      </Link>
      <div></div>
      <Link href="/about">
        <a>about</a>
      </Link>
      <div></div>
      <Link href="/products">
        <a>products</a>
      </Link>
      <div></div>
      <Link href="/users">
        <a>users</a>
      </Link>
      <div></div>
      <Link href="/posts">
        <a>posts</a>
      </Link>
      <div></div>
      <Link href="/news">
        <a>news</a>
      </Link>
      <div></div>
      <Link href="/comments">
        <a>comments</a>
      </Link>
      <div></div>
      <Link href="/cars">
        <a>Cars (Image Component)</a>
      </Link>
    </div>
  );
}
