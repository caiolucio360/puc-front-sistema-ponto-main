import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/routes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
