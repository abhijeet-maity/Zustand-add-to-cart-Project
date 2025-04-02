import React from "react";
import { useCartStore } from "../store/cartStore";
import { Products } from "../product";
import "../styles/main.scss";

const ProductList = () => {

    console.log(Products);

    const addToCart = useCartStore((state) => state.addToCart);
    return (
        <>
            <div className="product-list">
            <h1>Hello Zustand's Product List</h1>

            {
                Products.map((product) => {
                    return (
                        <div className="product-card" key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    )
            })}
            </div>
        </>
      
    );
}

export default ProductList;