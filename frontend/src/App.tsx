import "./App.css";
import { Outlet } from "react-router-dom";
import LoginModal from "./components/Modals/LoginModal";
function App() {
  return (
    <div>
      <Outlet />
      <LoginModal />
    </div>
  );
}

export default App;
