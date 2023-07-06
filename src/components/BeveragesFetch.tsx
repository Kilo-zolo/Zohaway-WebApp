import { useState, useEffect } from 'react';
import { BeverageItemProps } from './BeverageItem'; 


export function useBeverages() {
  const [BeveragesMap, setBeveragesMap] = useState<BeverageItemProps[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://zohaway-functions.azurewebsites.net/api/GetProductperCategory?cn=Beverages'
        );
        const data: BeverageItemProps[] = await response.json();
        localStorage.setItem("Beverages", JSON.stringify(data))
        setBeveragesMap(data);
      } catch (error) {
        console.error(error);
        setBeveragesMap([]);
      }
    };

    fetchData();
  }, []);

  return BeveragesMap;
}
