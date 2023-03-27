import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

//imported images
import "../styles/Food-card.css";


const FoodsCard = ({ item,cart,setCart }) => {
    return (
        <div className="food__item w-100">
            <Link to={`/food/${item.slug}`}>
                <div className="food__img">
                    <img src={`/api/v1/Food/Food-photo/${item._id}`} alt="Food-img" className="w-75" />
                </div>
            </Link>
            <div className="food__content">
                <span style={{color:"#df2020",fontWeight:"bold"}}>
                    {item.name}
                </span>
                <p className="desc-card">{item.description}</p>
                <span style={{color:"black"}} className="food__price">${item.price}</span>
                <div className=" d-flex align-items-center justify-content-between ">
                    <button
                        className="addTOCart__btn"
                        onClick={() => {
                            setCart([...cart, item]);
                            localStorage.setItem(
                                "cart",
                                JSON.stringify([...cart, item])
                            );
                            toast.success("Item Added to cart");
                        }}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodsCard;
