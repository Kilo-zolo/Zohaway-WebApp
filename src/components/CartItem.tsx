import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import {useProducts} from "../components/ProductsFetch";
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const productData = localStorage.getItem("Products");
    let productItems;
    
    if(productData !== null) {
        productItems = JSON.parse(productData);
    } else {
        productItems = useProducts();
    }
    
    const {removeFromCart} = useShoppingCart()
    const item = productItems.find((i: { ID: number; }) => i.ID === id)
    if(item == undefined) return undefined

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center"> 
        <img src={item.IMG} style={{width: "125px", height: "75px", objectFit: "cover"}}/>
        <div className="me-auto">
            <div>
                {item.PROName} { quantity > 1 && <span className="text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span>}
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem"}}>{formatCurrency(item.COST)}</div>
            <div>{formatCurrency(item.COST * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.ID)}>&times;</Button>
        </div>
        </Stack>
    )
}