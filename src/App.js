import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<Login/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
