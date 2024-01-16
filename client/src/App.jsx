// import './App.css'
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Home />
      {/* {<Outlet />} */}
    </>
  );
}
export default App;