import { useState, useEffect } from "react";
import "./OurClients.scss";

function OurClients() {
  const [logos, setLogos] = useState([
    "https://images-ecru.vercel.app/PortfoliAD/logo8.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo1.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo2.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo3.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo4.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo5.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo6.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo7.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo8.png",
    "https://images-ecru.vercel.app/PortfoliAD/logo1.png",
  ]);
  return (
    <div className="OurClients">
      <div className="clientLogosWrapper">
        {logos?.map((logo, index) => (
          <div key={index} className="clientLogo">
            <img src={logo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClients;
