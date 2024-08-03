import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
        </h1>

        <h3><Link href="/community">Visit community</Link></h3>
        <h3><Link href="/meals">See all meals</Link></h3>
        <h3><Link href="/meals/share">See all shared meals</Link></h3>
    </main>
  );
}
