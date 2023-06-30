import { Col, Row } from "react-bootstrap"
import { useBeverages } from "../components/BeveragesFetch";
import { BeverageItem } from "../components/BeverageItem"


export function Beverage() {
    const beverageItems = useBeverages();
    return <>
        <h1>Beverages</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {beverageItems.map(item => (
                <Col key={item.PROName}>
                    <BeverageItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}
