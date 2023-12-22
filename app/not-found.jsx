import Link from "next/link";

export default function NotFound() {
	return(
		<main>
			<h2>There was a problem.</h2>
			<p>The page you were looking for doesn't seem to exist.</p>
			<p>Go back to the <Link href="/">Homepage</Link></p>
		</main>
	)
}