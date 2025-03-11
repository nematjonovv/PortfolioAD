import { useState, useEffect } from "react";
import "./OurClients.scss";

function OurClients() {
  const [logos, setLogos] = useState([
    "Logo10",
    "Logo1",
    "Logo2",
    "Logo3",
    "Logo4",
    "Logo5",
    "Logo6",
    "Logo7",
    "Logo8",
    "Logo9",
    "Logo10",
    "Logo1"
  ]);
  return (
    <div className="OurClients">
      <div className="clientLogosWrapper">
        {logos?.map((logo, index) => (
          <div key={index} className="clientLogo">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClients;
