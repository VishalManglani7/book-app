// import './App.css'
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="main">
      <Header />
      {<Outlet />}
    </div>
  );
}
export default App;