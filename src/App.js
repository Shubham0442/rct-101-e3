import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Home"; 
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Navbar/>
      <Routes>  
          <Route path = "/" element = {<Login></Login>}></Route>
      </Routes>
  </BrowserRouter> 
    </div>
  );
}

export default App;
