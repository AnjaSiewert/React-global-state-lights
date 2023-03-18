import Link from "../components/Link";

export default function HomePage({ countOfLightsTurnedOn }) {
  return (
    <div>
      <h1>Home</h1>
      <p> {countOfLightsTurnedOn} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
