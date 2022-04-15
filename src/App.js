import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Users from "./Pages/Users";
import Single from "./Pages/Single";
import Addnew from "./Pages/Addnew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userID' element={<Single />} />
        <Route path='/users/new' element={<Addnew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
