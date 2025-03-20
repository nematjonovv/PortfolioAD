import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/Context";
import "./Projects.scss";
import { Link } from "react-router-dom";
function Projects() {
  const [portfolio, setPortfolio] = useState();
  const { setCategory } = useContext(Context);
  const { type } = useContext(Context);
  useEffect(() => {
    fetch("http://localhost:5000/portfolio")
      .then((response) => response.json())
      .then((data) => setPortfolio(data))
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  const { lang } = useContext(Context);

  useEffect(() => {
    const uniqueCategory = [
      ...new Set(portfolio?.map((item) => item[`category_${lang}`])),
    ];
    setCategory(uniqueCategory);
  }, [portfolio, lang]);

  const [info, setInfo] = useState(false);
  const [infoValue, setInfoValue] = useState("");
  const { setProjectId } = useContext(Context);
  const handleInfo = (itemInfo) => {
    setInfo(true);
    setInfoValue(itemInfo);
  };
  
  const handleResponseId = (responseId) => {
    setProjectId(responseId)
    window.localStorage.setItem('aboutId', responseId)
  }

  return (
    <div className="projects">
      {portfolio
        ?.filter(
          (projects) => projects[`category_${lang}`] == type || type === "All"
        )
        .map((item, index) => (
          <div className="projects_item" key={index}>
            <div className="img_item">
              <img src={item.img[0]} onClick={() => handleInfo(item)} alt="" />
            </div>
            <div className="img_body">
              <h3>{item.client}</h3>
              <Link to={"/about-project"} onClick={() => handleResponseId(item.id)}>
                <i className="bi bi-three-dots"></i>
              </Link>
            </div>
          </div>
        ))}
      <div className={info ? "item_img active" : "item_img"}>
        <div className="info_close" onClick={() => setInfo(false)}>
          <i onClick={() => setInfo(false)} className="bi bi-x-lg"></i>
        </div>
        <div className="info_body">
          {/* <i className="bi bi-arrow-left-circle" onClick={()=> ""}></i> */}
          {infoValue?.img && infoValue.img.length > 0 && (
            <img src={infoValue.img[0]} alt="" />
          )}
          {/* <i className="bi bi-arrow-right-circle"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
