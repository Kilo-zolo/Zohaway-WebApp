import { Col, Row } from "react-bootstrap"
import { useMains } from "../components/MainsFetch";
import { MainItem, MainItemProps } from "../components/MainItem"
import { useEffect, useState } from "react";

export function Main() {
    const fetchedMains = useMains();

    const [mainItems, setMainItems] = useState<MainItemProps[]>([]);

    useEffect(() => {
        const mainData = localStorage.getItem("Mains")
        if (mainData){
            const localMains = JSON.parse(mainData);
            setMainItems(localMains);
        } else {
            setMainItems(fetchedMains)
        }
    }, [fetchedMains])

    return <>
        <h1>Mains</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {mainItems.map(item => (
                <Col key={item.PROName}>
                    <MainItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}
