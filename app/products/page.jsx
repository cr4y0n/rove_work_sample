import { Suspense } from "react";
import ProductList from "./ProductList";
import Loading from "../loading";

export default function Products() {
	return(
		<main>
			<h2>Our products</h2>
			<p className="flex justify-center my-8">Check out our must have pieces!</p>
			<Suspense fallback={<Loading />}>
				<ProductList />
			</Suspense>
		</main>
	)
}