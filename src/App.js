import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/PublicRoute/PublicRoute";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      
      <Navbar>
      <Routes>
      {/* <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/contect" element={<Contect></Contect>}></Route> */}

  {
  publicRoute.map(({path, Component }, index) => (<Route key={index} path={path} element={<Component/>}></Route>
  ))}
      
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
