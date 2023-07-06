import { Col, Row } from "react-bootstrap"
import { useBeverages } from "../components/BeveragesFetch";
import { BeverageItem, BeverageItemProps } from "../components/BeverageItem"
import { useEffect, useState } from "react";


export function Beverage() {

    const fetchedBeverages = useBeverages();

    const [beverageItems, setBeverageItems] = useState<BeverageItemProps[]>([]);

    useEffect (() => {
        const beverageData = localStorage.getItem("Beverages");
        if (beverageData) {
            const localBevs = JSON.parse(beverageData);
            setBeverageItems(localBevs);
        } else {
            setBeverageItems(fetchedBeverages)
        }
    }, [fetchedBeverages])

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
