import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Home from "./components/home/home.js";
function App() {
  return (
    <div className="App">
      <div>
        <Home></Home>
        {/* <Button variant="primary" className="mr-2"> */}
        {/*  */}
        {/* Primary */}
        {/* </Button> */}
      </div>
    </div>
  );
}

export default App;
