import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Navbar } from "./components/Navbar"
import { Beverage } from "./pages/Beverages"
import { Appetizer } from "./pages/Appetizers"
import { Main } from "./pages/Mains"
import { Dessert } from "./pages/Desserts"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Checkout } from "./pages/Checkout"
import { Login } from "./pages/Login"

function App() {

  return(
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category/Beverages" element={<Beverage />} />
          <Route path="/category/Appetizers" element={<Appetizer />} />
          <Route path="/category/Mains" element={<Main />} />
          <Route path="/category/Desserts" element={<Dessert />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
    
  ) 
}

export default App
