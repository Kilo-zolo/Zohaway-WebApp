import { Col, Row } from "react-bootstrap"
import beverageItems from "../data/Beverages.json"
import { BeverageItem } from "../components/beverageItem"

export function Beverage() {
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
