import { Col, Row } from "react-bootstrap"
import MainItems from "../data/Mains.json"
import { MainItem } from "../components/MainItem"

export function Main() {
    return <>
        <h1>Mains</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {MainItems.map(item => (
                <Col key={item.PROName}>
                    <MainItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}
