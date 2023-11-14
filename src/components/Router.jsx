
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Login";


const RoutingFile = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={LoginPage} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutingFile;