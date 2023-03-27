import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//imported loaclly
import Layout from "../components/Layout/Layout";

//imported css
import "../styles/FoodDetailsStyles.css";

const FoodDetails = ({ setCart, cart }) => {

  const params = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState({});
  const [relatedFoods, setRelatedFoods] = useState([]);


  useEffect(() => {
    if (params?.slug) getFood();
  }, [params?.slug]);

  //getFood
  const getFood = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/food/get-food/${params.slug}`
      );
      setFood(data?.food);
      getSimilarFood(data?.food._id, data?.food.category._id);
    } catch (error) {
      console.log(error);
    }
  };


  //get similar food
  const getSimilarFood = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/food/related-food/${pid}/${cid}`
      );
      setRelatedFoods(data?.foods);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout>
      <div className="row container food-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/food/food-photo/${food._id}`}
            className="card-img-top"
            alt={food.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 food-details-info">
          <h1 className="text-center">Food Details</h1>
          <hr />
          <h6>Name : {food.name}</h6>
          <h6>Description : {food.description}</h6>
          <h6>
            Price :
            {food?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {food?.category?.name}</h6>
          {/* <button class="btn btn-secondary ms-1 " onClick={(()=>navigate(-1))}>Back</button> */}
          <button
            className="btn btn-dark ms-1"
            onClick={() => {
              setCart([...cart, food]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...cart, food])
              );
              toast.success("Item Added to cart");
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <hr />
      <div className="row container similar-foods">
        {relatedFoods.length < 1 && (
          <p className="text-center">No Similar Foods found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedFoods?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/food/food-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/food/${p.slug}`)}
                  >
                    More Details
                  </button>
                  {/* <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to cart");
                  }}
                >
                  ADD TO CART
                </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FoodDetails;
