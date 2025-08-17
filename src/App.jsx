import "bootstrap/dist/css/bootstrap.min.css"
import BlogRecetas from "./components/BlogRecetas"
import Menu from "./components/Menu"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recetas from "./components/Recetas"

function App() {
  
  return (
    <>
    <Router>
    <Menu></Menu>
    <Routes>
      <Route path="/" element={<Recetas></Recetas>}></Route>
      <Route path="/admin" element={<BlogRecetas></BlogRecetas>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
