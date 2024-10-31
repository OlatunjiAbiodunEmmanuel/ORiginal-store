"use client";
import SetColor from "@/app/components/products/SetColor";
import { Rating } from "@mui/material";
import React, { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  brand: string;
  selectedImg: SelectedImgType;
};

export type SelectedImgType = {
  map(arg0: (image: any) => React.JSX.Element): React.ReactNode;
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    description: product.description,
    quantity: 1,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
  });

  const handleColorSelect = useCallback(() => {}, [cartProduct.selectedImg]);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="">Image</div>
      <div className=" flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} Reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY :</span> {product.category}
        </div>

        <div>
          <span className="font-semibold">BRAND :</span> {product.brand}
        </div>

        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In Stock" : "Out Of Stock"}
        </div>
        <Horizontal />
        <SetColor
          images={product.images}
          cartProduct={cartProduct}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <div>quatity</div>
        <Horizontal />
        <div>add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;