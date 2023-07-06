import { useState, useEffect } from 'react';
import { DessertItemProps } from './DessertItem'; 


export function useDesserts() {
  const [DessertsMap, setDessertsMap] = useState<DessertItemProps[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://zohaway-functions.azurewebsites.net/api/GetProductperCategory?cn=Desserts'
        );
        const data: DessertItemProps[] = await response.json();
        localStorage.setItem("Desserts", JSON.stringify(data))
        setDessertsMap(data);
      } catch (error) {
        console.error(error);
        setDessertsMap([]);
      }
    };

    fetchData();
  }, []);

  return DessertsMap;
}
