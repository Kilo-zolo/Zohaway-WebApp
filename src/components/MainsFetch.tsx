import { useState, useEffect } from 'react';
import { MainItemProps } from './MainItem'; 


export function useMains() {
  const [MainsMap, setMainsMap] = useState<MainItemProps[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://zohaway-functions.azurewebsites.net/api/GetProductperCategory?cn=Mains'
        );
        const data: MainItemProps[] = await response.json();
        localStorage.setItem("Mains", JSON.stringify(data))
        setMainsMap(data);
      } catch (error) {
        console.error(error);
        setMainsMap([]);
      }
    };

    fetchData();
  }, []);

  return MainsMap;
}
