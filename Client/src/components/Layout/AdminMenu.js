import React from "react";
import { NavLink } from "react-router-dom";


const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-food"
            className="list-group-item list-group-item-action"
          >
            Create food
          </NavLink>
          <NavLink
            to="/dashboard/admin/foods"
            className="list-group-item list-group-item-action"
          >
            foods
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
