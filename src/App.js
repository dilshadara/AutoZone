import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
