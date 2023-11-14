//import logo from "./logo.svg";
import "./App.css";
import RoutingFile from "./components/Router";
// import { Provider } from "react-redux";
// import { createstore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";


// const store = applyMiddleware(thunk)(createstore)();

function App() {
  return (
    <>
      {/* <Provider > */}
      <RoutingFile />
      {/* </Provider> */}
    </>
  );
}

export default App;