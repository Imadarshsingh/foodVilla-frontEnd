import React from "react";

const Footer=()=>{
    return(
        <div className="footer d-flex justify-content-center align-items-center" style={{borderTop:"2px solid white"}}>
        <div className="footer-info">
          <p className="p-size increased-font-size text-success fs-5">
            Created By <span className="text-white">Aniket Pal</span> 2024 FoodZilla
          </p>
        </div>
      </div>
    );
}

export default Footer;