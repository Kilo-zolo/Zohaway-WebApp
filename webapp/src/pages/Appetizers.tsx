import { Col, Row } from "react-bootstrap"
import { useAppetizers } from "../components/AppetizersFetch";
import { AppetizerItem } from "../components/AppetizerItem"

export function Appetizer() {
    const AppetizerItems = useAppetizers();
    return <>
        <h1>Appetizers</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {AppetizerItems.map(item => (
                <Col key={item.PROName}>
                    <AppetizerItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}
