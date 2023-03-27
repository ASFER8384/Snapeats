import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

//import locally
import Layout from "./../components/Layout/Layout";
import Categories from "./Categories.js";
import Banner from "./Banner.js";
import Contact from "./Contact.js"
import FoodsCard from "./FoodCard.js";

//import css
import "../styles/Homepage.css";

const HomePage = ({cart,setCart}) => {

  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //get foods
  const getAllFoods = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/food/get-food`);
      setLoading(false);
      setFoods(data.foods);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/food/food-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/food/food-list/${page}`);
      setLoading(false);
      setFoods([...foods, ...data?.foods]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };


  useEffect(() => {
    if (!checked.length || !radio.length) getAllFoods();
  }, [checked.length, radio.length]);


  useEffect(() => {
    if (checked.length || radio.length) filterFood();
  }, [checked, radio]);

  //get filterd food
  const filterFood = async () => {
    try {
      const { data } = await axios.post("/api/v1/food/food-filters", {
        checked,
        radio,
      });
      setFoods(data?.foods);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <Layout title={"Home - SnapEats "}>
      <Banner/>
        <Container className="">
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            {foods.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <FoodsCard cart={cart} setCart={setCart} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
        <Categories/>
        <Contact/>
    </Layout>
  );
};

export default HomePage;
