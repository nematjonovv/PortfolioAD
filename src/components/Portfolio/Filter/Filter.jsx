import { Context } from "../../../Context/Context";
import "./Filter.scss";
import { useContext, useEffect, useState } from "react";

function Filter() {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/api/categories')
    .then((res) => res.json())
    .then((data) => setCategories(data))
  }, [])

  const { setType } = useContext(Context);

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <nav className="typeList">
        <button onClick={() => setType("All")}>All</button>
        {categories &&
          categories.map((category, index) => (
            <button onClick={() => setType(category.id)} key={index}>
              {category.category}
            </button>
          ))}
      </nav>
    </div>
  );
}

export default Filter;
