import { useState, useEffect, useRef } from 'react';

interface ICarrousel<T> {
  currentItems: T[];
}

export const useCarrousel = <T>(items: T[], intervalTime: number = 5000, itemsPerInterval: number = 4): ICarrousel<T> => {
  const [currentItems, setCurrentItems] = useState<T[]>([]);
  const indexRef = useRef(0); // Usar useRef para evitar el ciclo de renderizado

  // Funcion para inicializar el carrousel con los primeros elementos
  useEffect(() => {
    setCurrentItems(items.slice(0, itemsPerInterval)); 
  }, []);

  // Funcion para cambiar los elementos del carrousel en base al intervalo de tiempo
  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + itemsPerInterval) < items.length ? indexRef.current + itemsPerInterval : 0;
      setCurrentItems(items.slice(indexRef.current, indexRef.current + itemsPerInterval));
    }, intervalTime);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, intervalTime, itemsPerInterval]);

  return { currentItems };
};
