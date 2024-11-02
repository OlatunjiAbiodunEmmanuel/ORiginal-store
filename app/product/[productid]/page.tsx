import Container from "@/app/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utilis/products";

interface ProductPageProps {
  params: { productid: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const product = products.find((product) => product.id === params.productid);

  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
