// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>トップページ</h1>
      <Link href="/login">
        <a>ログインページへ</a>
      </Link>
    </div>
  );
}
