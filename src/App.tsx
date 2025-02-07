import "./App.css";
import { BrowserRouter } from "react-router";
import { ApplicationRoutes } from "./screens/ApplicationRoutes";

function App() {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
}

export default App;
