// src/components/ui/ProductCard.tsx

import React from 'react';
import styles from './ProductCard.module.css';
import { ProductCardProps } from '../../types/types';

const ProductCard: React.FC<ProductCardProps> = ({ image, price, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.details}>
        <p className={styles.price}>U${price.toFixed(2)}</p>
        <p className={styles.shipping}>free shipping</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ProductCard;
