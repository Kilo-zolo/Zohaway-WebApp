import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Login } from "./pages/Login"
import { Navbar } from "./components/Navbar"
import { Beverage } from "./pages/Beverages"
import { Appetizer } from "./pages/Appetizers"
import { Main } from "./pages/Mains"
import { Dessert } from "./pages/Desserts"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {

  return(
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/Beverages" element={<Beverage />} />
          <Route path="/category/Appetizers" element={<Appetizer />} />
          <Route path="/category/Mains" element={<Main />} />
          <Route path="/category/Desserts" element={<Dessert />} />
        </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
    
  ) 
}

export default App
