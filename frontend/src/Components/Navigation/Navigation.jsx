import React from "react";
import avatar from "../../images/avatar.jpg";
import { menuItems } from "../../utils/menuItems";
import { signOut } from "../../utils/icons";
import "./Navigation.css";
import { Link, Outlet } from "react-router-dom";
import { Login } from "../../pages/Login";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

export function Navigation({ active, setActive }) {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  const Logout = () => {
    Cookies.remove("token");
    navigate("/login");
  };
  return (
    <>
      <div className="nav">
        <div className="user-con">
          <img src={avatar} alt="avatar" className="avatar-img" />

          <div className="text">
            <h2>{Login.name}</h2>
            <p>Your Money</p>
          </div>
        </div>

        <ul className="menu-items">
          {menuItems.map((item) => {
            return (
              <Link to={item.link}>
                <li
                  key={item.id}
                  // onClick={() => setActive(item.id)}
                  // className={active === item.id ? "active" : ""}
                >
                  {item.icon}
                  <div>{item.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="btm-nav">
          <button onClick={Logout}>{signOut} Sign Out</button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
