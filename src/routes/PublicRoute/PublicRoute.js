

import About from "../../pages/About/About";
import Contect from "../../pages/Contect/Contect";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Service from "../../pages/Service/Service";

export const publicRoute = [
  {path:"/home", name:"Home", Component:Home },
  {path:"/about", name:"About", Component:About },
  {path:"/service", name:"Service", Component:Service },
  {path:"/contect", name:"Contect", Component:Contect },
  {path:"/login", name:"Login", Component:Login },
];