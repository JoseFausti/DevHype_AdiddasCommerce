import React from "react";
import { IProduct } from "../../../types/types";
import Styles from "./ProductCard.module.css";


interface ProductCardProps{
    carrousel: IProduct[];
}

const ProductCard: React.FC<ProductCardProps> = ({carrousel}) => {
  return (
    <div className={Styles.productCard}>
        {carrousel.map((product) => (
            <div key={product.id} className={Styles.productCardItem}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                {product.discount.length > 3 
                    ? product.discount.slice(0, 3).map((discount) => (
                        <p key={discount.id} className={Styles.discount}>Discount: {discount.percentage}%</p>
                    ))
                    : product.discount.map((discount) => (
                        <p key={discount.id} className={Styles.discount}>Discount: {discount.percentage}%</p>
                    )
                )}
            </div>
        ))}
    </div>
  )
}

export default ProductCard