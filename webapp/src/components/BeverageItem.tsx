import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type BeverageItemProps = {
    ID: number,
    PROName: string, 
    IMG: string, 
    COST: number
}

export function BeverageItem({ID, PROName, IMG, COST}: BeverageItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(ID)
    return <Card className="h-100"> 
        <Card.Img variant="top" src={IMG} height="600px" style ={{ objectFit: "cover"}} />
        <Card.Body className="d-flex flex-column ">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{PROName}</span>
            <span className="ms-2 text-muted">{formatCurrency(COST)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseCartQuantity(ID)}>+ Add To Cart</Button>
                ) : <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                    <Button onClick={() => decreaseCartQuantity(ID)}>-</Button>
                    <div>
                    <span className="fs-3"> {quantity} </span> in cart
                    </div>
                    <Button onClick={() => increaseCartQuantity(ID)}>+</Button>
                </div>
                <Button onClick={() => removeFromCart(ID)} variant="danger" size="sm">Remove</Button>
                </div>}
            </div>
        </Card.Body>
    </Card>
}
