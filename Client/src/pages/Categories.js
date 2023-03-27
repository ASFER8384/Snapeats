import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//locally imported
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

//imported images
import "../styles/Categories.css"

const Categories = () => {

  const categories = useCategory();
  
  return (
      <div className="container df-cat " style={{ marginTop: "100px" }}>
        <div className="row container ">
          <h1>Category <i class="fa-solid fa-share"></i></h1>
          {categories.map((c) => (
            <div  className="  col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card categories-background">
                <Link style={{color:"white"}} to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Categories;
