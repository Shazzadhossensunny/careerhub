import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Root() {
  return (
    <div>
    <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
       <Header></Header>
    </div>
     <Outlet></Outlet>
     <div className="bg-[#1A1919]">
     <Footer></Footer>
     </div>
    </div>

  )
}
