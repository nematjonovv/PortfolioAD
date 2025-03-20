import { Context } from "../../../Context/Context";
import "./Filter.scss";
import { useContext } from "react";

function Filter() {
  const { category } = useContext(Context);
  const { setType } = useContext(Context);

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <nav className="typeList">
        <button onClick={() => setType("All")}>All</button>
        {category &&
          category.map((category1, index) => (
            <button onClick={() => setType(category1)} key={index}>
              {category1}
            </button>
          ))}
      </nav>
    </div>
  );
}

export default Filter;
