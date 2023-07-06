import { Col, Row } from "react-bootstrap";
import { useCategories, CategoryType } from "../components/Categories";
import { Link } from "react-router-dom";
import { Category, CategoryProps } from "../components/Category";
import { useEffect, useState } from "react";

export function Menu() {
    const fetchedCategories = useCategories();

    const [categories, setFetchedItems] = useState<CategoryProps[]>([]);
    
    useEffect (() => {
        const categoryData = localStorage.getItem("Categories");
        if (categoryData) {
            const localCats = JSON.parse(categoryData);
            setFetchedItems(localCats)
        } else {
            setFetchedItems(fetchedCategories)
        }
    }, [fetchedCategories])
    
    return (
        <>
            <Row md={2} xs={1} lg={3} className="g-3">
                {categories.map((item: CategoryType) => (
                    <Col key={item.CatName}>
                        <Link to={`/category/${item.CatName}`}>
                            <Category {...item} />
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Menu;
