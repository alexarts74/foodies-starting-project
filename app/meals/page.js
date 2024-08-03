import Link from 'next/link'

export default function Meals() {
    return (
        <>
            <h2>Welcome to all meals</h2>
            <p><Link href="/meals/share">All the shared Meals</Link></p>
            <p><Link href="/meals/table-1">All the shared meals at table 1</Link></p>
            <p><Link href="/meals/table-2">All the shared meals at table 2</Link></p>
        </>
    )
}
