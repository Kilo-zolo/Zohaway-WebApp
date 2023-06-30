import { Card } from "react-bootstrap"

type CategoryProps = {
    CatName: string, 
    IMG: string
}

export function Category({CatName, IMG}: CategoryProps) {
    return <Card>
        <Card.Img variant="top" src={IMG} height="400px" style={{objectFit: "cover"}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{CatName}</span>
            </Card.Title>
        </Card.Body>

    </Card>

}