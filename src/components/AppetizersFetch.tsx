import { useState, useEffect } from 'react';
import { AppetizerItemProps } from './AppetizerItem'; 


export function useAppetizers() {
  const [AppetizersMap, setAppetizersMap] = useState<AppetizerItemProps[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://zohaway-functions.azurewebsites.net/api/GetProductperCategory?cn=Appetizers'
        );
        const data: AppetizerItemProps[] = await response.json();
        localStorage.setItem("Appetizers", JSON.stringify(data))
        setAppetizersMap(data);
      } catch (error) {
        console.error(error);
        setAppetizersMap([]);
      }
    };

    fetchData();
  }, []);

  return AppetizersMap;
}
