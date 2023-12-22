import Image from "next/image";
import { notFound } from "next/navigation";

async function getProduct(artno) {
	const res=await fetch(`http://localhost:4000/products/${artno}`, {
		next: {
			revalidate: 60
		}
	})

	if(!res.ok) {
		notFound()
	}

	return res.json()
}

export default async function ProductDetails({params}) {
	//const artno = params.artno

	const product=await getProduct(params.artno)

	return(
		//<div>{artno}</div>
		<main className="card">
			<Image
				src={product["image-url"]}
				alt={product["url-slug"]}
				width={100}
				height={200}
				quality={100}
				placeholder="empty" //blur?
				priority={true}
			/>
			<h3>{product.price} kr</h3>
			<p>{product.title}</p>
			<p>{product.brand}</p>
			<p>{product.description}</p>
		</main>
	)
}

//product["article-number"]?