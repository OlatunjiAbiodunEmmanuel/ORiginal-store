import { products } from "@/utilis/products";
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import { truncateTxt } from "@/utilis/TruncateText";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HeroSection />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <div key={product.id}>{truncateTxt(product.name)}</div>;
          })}
        </div>
      </Container>
    </div>
  );
}
