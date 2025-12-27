import CartClient from "./components/CartClient";
import { getProducts } from "./actions";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="container">
      <header className="hero">
        <h1>Simple Storefront</h1>
        <p>Server-rendered catalog with a local cart.</p>
      </header>
      <CartClient products={products} />
    </main>
  );
}
