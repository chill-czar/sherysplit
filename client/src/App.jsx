import Login from "./components/Login";

import ReactDOM from "react-dom/client";
import { Route , Routes } from "react-router-dom";
import Signup from './components/Signup';
function App() {



  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  );
}

export default App;
