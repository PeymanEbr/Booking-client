import Home from "./booking/Home";
import Login from "./auth/Login";
import Registe from "./auth/Register";

import TopNav from "./components/TopNav";
import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
       <TopNav />
        <ToastContainer position="top-center" theme="light"/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Registe/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
