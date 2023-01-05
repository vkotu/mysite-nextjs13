import Link from 'next/link';

export default async function Home() {
  return <div>
    <div>
      <div><h1>Hi, my name is Venkat Kotu!!</h1></div>
      <div><Link href="/blog"> Checkout my Blog</Link></div>
      <div><Link href="/contact"> Contact Me</Link></div>
    </div>
  </div>
}