import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";


//imported locally
import { useAuth } from "../../contex/auth.js";
import Spinner from "../spinner";

export default function AdminRoute() {

  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/auth/admin-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
}