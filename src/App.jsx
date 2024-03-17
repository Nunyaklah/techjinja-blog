import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Blog from "./pages/Blog"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="blog/:id" element={<Blog />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
