import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

//locally imported
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const Foods = () => {

  const [foods, setFoods] = useState([]);

  //getall foods
  const getAllFoods = async () => {
    try {
      const { data } = await axios.get("/api/v1/food/get-food");
      setFoods(data.foods);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  useEffect(() => {
    getAllFoods();
  }, []);
  
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Foods List</h1>
          <div className="d-flex flex-wrap">
            {foods?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/food/${p.slug}`}
                className="food-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/food/food-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Foods;
