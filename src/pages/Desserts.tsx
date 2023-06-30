import { Col, Row } from "react-bootstrap"
import { useDesserts } from "../components/DessertsFetch";
import { DessertItem } from "../components/DessertItem"

export function Dessert() {
    const DessertItems = useDesserts();
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
