import { Col, Row } from "react-bootstrap"
import DessertItems from "../data/Desserts.json"
import { DessertItem } from "../components/DessertItem"

export function Dessert() {
    return <>
        <h1>Desserts</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {DessertItems.map(item => (
                <Col key={item.PROName}>
                    <DessertItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}
