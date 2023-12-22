import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Welcome!</h2>
      <p className="flex justify-center my-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>
      <Link href="/products">
        <button className="btn-primary">View items</button>
      </Link>
    </main>
  )
}
