import { useState, useEffect } from 'react';

export type CategoryType = {
  CatName: string,
  IMG: string,
}

export function useCategories() {
  const [categoriesMap, setCategoriesMap] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://zohaway-functions.azurewebsites.net/api/GetCategories'
        );
        const data: CategoryType[] = await response.json();
        setCategoriesMap(data);
      } catch (error) {
        console.error(error);
        setCategoriesMap([]);
      }
    };

    fetchData();
  }, []);

  return categoriesMap;
}
