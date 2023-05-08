import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ChepsDetles from "./Components/ChepsDetles/ChepsDetles";
import Form from "./Components/Form/Form";
import { createContext, useState } from "react";
import Logout from "./Components/Logout/Logout";
import PrivetRout from "./Components/PrivetRout/PrivetRout";
import Error from "./Components/Error/Error";
import Blog from "./Components/Blog/Blog";

export const Catagory = createContext()

const App = () => {
  const [users, setUsers] = useState()
  return (
    <Catagory.Provider value={[users, setUsers]}>
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/recipy" element={<PrivetRout isSignIN={users}><ChepsDetles></ChepsDetles></PrivetRout>}></Route>
            <Route path="/form" element={<Form></Form>}></Route>
            <Route path="/logout" element={<Logout></Logout>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </Catagory.Provider>
  );
};

export default App;