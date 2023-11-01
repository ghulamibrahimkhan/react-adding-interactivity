import Link from "next/link";


export default function Home() {
  return (
    <>
      <Link href="/Responding-to-events">Events</Link>
      <br />
      <Link href="/State-a-components-memory">State</Link>
      <br />
      <Link href="/State-as-snapshot">Snap Shot</Link>
      <br />
      <Link href="/Queueing-a-series-of-update">Queueing</Link>
      <br />
      <Link href="/Updating-objects-in-state">Updating Objects</Link>
    </>
  )
}
