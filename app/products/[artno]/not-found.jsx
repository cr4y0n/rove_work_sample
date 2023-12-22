import Link from "next/link";

export default function notFound() {
	return(
		<main>
			<h2>Oh, no!</h2>
			<p>The item you were looking for doesn't seem to exist.</p>
			<p>Go back to all <Link href="/products">Products</Link></p>
		</main>
	)
}