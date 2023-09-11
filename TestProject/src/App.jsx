import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      {/* <Route path="*" element={}/> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
