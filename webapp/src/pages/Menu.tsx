import { Col, Row } from "react-bootstrap";
import { useCategories, CategoryType } from "../components/Categories";
import { Link } from "react-router-dom";
import { Category } from "../components/Category";

export function Menu() {
    const categories = useCategories();
    
    return (
        <>
            <h1>Menu</h1>
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
