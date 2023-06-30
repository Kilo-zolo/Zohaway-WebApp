import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import {useProducts} from "../components/ProductsFetch";

type ShoppingCartProps = {
    isOpen: boolean
}

export let total_amount = 0;
export const setAmount = (value: number) => {
  total_amount = value;
};

export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const productItems = useProducts();
    const { closeCart, cartItems } = useShoppingCart()
    const navigate = useNavigate(); // Invoke useNavigate hook

    const goToCheckout = () => {
        navigate('/checkout'); // Programmatically navigate to checkout page
    }

    return <Offcanvas show = {isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> 
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Total {formatCurrency(cartItems.reduce((total, CartItem) => {
                            const item = productItems.find(i => i.ID === CartItem.id)
                            setAmount(total + (item?.COST || 0) * CartItem.quantity);
                            return total_amount;
                    }, 0))}
                </div>
                <Button className="w-100 mt-3" variant="success" onClick={goToCheckout}>Checkout</Button>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}
