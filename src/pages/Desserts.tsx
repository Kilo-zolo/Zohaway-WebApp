import { Col, Row } from "react-bootstrap"
import { useDesserts } from "../components/DessertsFetch";
import { DessertItem, DessertItemProps } from "../components/DessertItem"
import { useEffect, useState } from "react";

export function Dessert() {
    const fetchedDesserts = useDesserts();

    const [dessertItems, setDessertItems] = useState<DessertItemProps[]>([])

    useEffect (() => {
        const dessertData = localStorage.getItem("Desserts");
        if (dessertData) {
            const localDess = JSON.parse(dessertData);
            setDessertItems(localDess);
        } else{
            setDessertItems(fetchedDesserts)
        }
    }, [fetchedDesserts])
    
    return <>
        <h1>Desserts</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {dessertItems.map(item => (
                <Col key={item.PROName}>
                    <DessertItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}
