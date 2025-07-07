import {Headers} from "../ui/Headers.jsx";
import {Footers} from "../ui/Footers.jsx";
import {Outlet} from "react-router-dom";


export const Applayout =()=>{
    return (
    <>
   
    <Headers/>|
     <Outlet />
    <Footers/>
    </>
    );
};