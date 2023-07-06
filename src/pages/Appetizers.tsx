import { Col, Row } from "react-bootstrap"
import { useAppetizers } from "../components/AppetizersFetch";
import { AppetizerItem, AppetizerItemProps } from "../components/AppetizerItem"
import { useEffect, useState } from "react";

export function Appetizer() {
    const fetchedAppetizers = useAppetizers();

    const [appetizerItems, setAppetizerItems] = useState<AppetizerItemProps[]>([])

    useEffect (() => {
        const appetizerData = localStorage.getItem("Appetizers");
        if (appetizerData) {
            const localApps = JSON.parse(appetizerData);
            setAppetizerItems(localApps);
        } else {
            setAppetizerItems(fetchedAppetizers)
        }
    }, [fetchedAppetizers])
    return <>
        <h1>Appetizers</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {appetizerItems.map(item => (
                <Col key={item.PROName}>
                    <AppetizerItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}
