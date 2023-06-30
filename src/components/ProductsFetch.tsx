import { useState, useEffect } from 'react';

export type ProductItem = {
    ID: number,
    PROName: string, 
    IMG: string, 
    COST: number
}

export function useProducts() {
  const [productMap, setProductMap] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://zohaway-functions.azurewebsites.net/api/GetProducts'
        );
        const data: ProductItem[] = await response.json();
        setProductMap(data);
      } catch (error) {
        console.error(error);
        setProductMap([]);
      }
    };

    fetchData();
  }, []);

  return productMap;
}