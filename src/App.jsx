import Home from "./pages/Home/index.jsx";
import Showcase from "./pages/Home/Section/showcase.jsx";
import Header from "./pages/Header/index.jsx";
import Footer from "./pages/Footer/index.jsx";
import Blog from "./pages/Blog/index.jsx";
import BlogShowcase from './pages/Blog/BlogShowcase.jsx'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <header>
        <Header />
        <Routes>
          <Route path="/" element={<Showcase />}></Route>
          <Route path="/Blog" element={<BlogShowcase />}></Route>
        </Routes>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
