import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

//locally imported
import Layout from "../components/Layout/Layout";
import "../styles/CategoryFoodStyles.css";

const CategoryFood = () => {

  const params = useParams();
  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);

  //product by category
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/food/food-category/${params.slug}`
      );
      setFoods(data?.foods);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category CF-D">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{foods?.length} result found </h6>
          <div className="  mb-5">
            <div className="d-flex flex-wrap flex-Ct">
              {foods?.map((p) => (
                <div className="card m-2 food__item " key={p._id}>
                <div className="food__img">
                 <img src={`/api/v1/food/food-photo/${p._id}`} alt="Food-img" className="w-100" />
             </div>
             <div className="food__content">
             <span style={{color:"#df2020",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}>
                 {p.name}
             </span>
             <p className="desc-card">{p.description}</p>
             <span style={{color:"black",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}} className="food__price">Price: ${p.price}</span>
             <div className=" d-flex align-items-center justify-content-between ">
                 <button
                     className="addTOCart__btn"
                     onClick={() => navigate(`/food/${p.slug}`)}
                 >
                    More Details
                 </button>
             </div>
         </div>
             </div>
              ))}
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default CategoryFood;
