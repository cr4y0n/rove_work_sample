import Image from "next/image";
import Link from "next/link";

async function getProducts() {
	const res=await fetch('http://localhost:4000/products', {
		next: {
			revalidate: 60 * 60 * 12 //vad är rimligt för ecommerce? hur ofta läggs nya varor till i db?
		}
	})

	return res.json()
}

export default async function ProductList() {
	const products=await getProducts()

	return(
		<>
			{products.map((product) => (
				<div key={product["article-number"]} className="card my-8">
          <Link href={`/products/${product["article-number"]}`}>
            <Image
              src={product["image-url"]}
              alt={product["url-slug"]}
              width={100}
              height={200}
              quality={100}
              placeholder="empty" //blur?
              priority={true}
              // layout="fill"
              // objectFit="cover"
            />
            <h3>{product.price} kr</h3>
            <p>{product.title}</p>
            <p>{product.brand}</p>
          </Link>
				</div>
			))}
			{products.length === 0 && (
				<p>We're sorry, there are no items left.</p>
			)}
		</>
	)
}