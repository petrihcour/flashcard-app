import React from "react";
import { useLocation } from "react-router-dom";

// navigation at top of all screens not on home page / error messages 
// links to Home `/`
// nav on top includes title name of each necessary component 

function NavHome() {
    const location = useLocation();
    const shouldRender = location.pathname !== "/";
    
    if (shouldRender) {
        return <h1>hi</h1>
    }
    return null;
}

export default NavHome;