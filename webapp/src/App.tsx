import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Login } from "./pages/Login"
import { Navbar } from "./components/Navbar"

function App() {

  return(
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
    
  ) 
}

export default App
