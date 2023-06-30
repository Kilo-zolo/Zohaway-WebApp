import { Col, Row } from "react-bootstrap"
import Categories from "../data/Categories.json"
import { Link } from "react-router-dom";
import { Category } from "../components/Category"

export function Menu() {    
    return (
        <>
            <h1>Menu</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {Categories.map( item => (
                    <Col key={item.CatName}>            
                        <Link to={`/category/${item.CatName}`}>
                            <Category {...item} />
                        </Link>
                    </Col>

                ))}
            </Row>
        </>
    )
        
}