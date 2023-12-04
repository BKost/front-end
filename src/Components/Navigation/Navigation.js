import { useState, useEffect } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";
import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, useLocation, useParams } from "react-router-dom";

function Navigation() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { screenWidth } = useScreenWidth();
  const [categoriesHover, setCategoriesHover] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [active, setActive] = useState(false);
  const [categoryChange, setCategoryChange] = useState(false);

  const { category: categoryParam } = useParams();
  const { pathname } = useLocation();

  const categories = [
    {
      category: "Electronics",
      path: "electronics",
    },
    {
      category: "Home",
      path: "home",
    },
    {
      category: "Kitchen",
      path: "kitchen",
    },
    {
      category: "Clothes",
      path: "clothes",
    },
  ];

  const links = categories.map((item) => (
    <NavLink
      className={`categories-li  ${
        categoryParam === item.path && "category-active"
      } `}
      to={`categories/${item.path}`}
    >
      {item.category}
    </NavLink>
  ));

  function addActiveClass(path) {
    if (path === pathname) {
      return "nav-active";
    } else {
      return "";
    }

    // return "nav-active";
  }

  addActiveClass();

  function closeNavigation() {
    setMenuOpened(false);
    setCategoriesHover(false);
    // setMenuOpened(false);
  }

  return (
    <div>
      {screenWidth > 1178 ? (
        <nav
          onMouseLeave={() => setCategoriesHover(false)}
          className="navigation"
        >
          <div className="ul-container">
            <ul className="ul-center">
              <li
                className="cursor-pointer"
                // onMouseLeave={() => setCategoriesHover(false)}
                onMouseEnter={() => setCategoriesHover(true)}
              >
                Categories
                {/* <KeyboardArrowDownIcon fontSize="large" />{" "} */}
              </li>
            </ul>
            <ul className="ul-right">
              <li>
                <NavLink
                  className={`${addActiveClass("/login")}`}
                  to={"/login"}
                >
                  Log in
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  className={`${addActiveClass("/register")}`}
                  to={"/register"}
                >
                  Register
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  className={`${addActiveClass("/user-page")}`}
                  to={"/user-page"}
                >
                  My profile
                </NavLink>
              </li>
              {/* DO NOT FORGET my-listings route !!! */}
              {/* <li>
                {" "}
                <NavLink
                  className={`${addActiveClass("/my-listings")}`}
                  to={"/user-page"}
                >
                  My listings
                </NavLink>
              </li> */}
              <li className="cart-li">
                <NavLink to={"/cart"} aria-label="View shopping cart, 2 items">
                  <div className="cart-nav">
                    <ShoppingCartIcon fontSize="large" /> 2{" "}
                    {/* <KeyboardArrowDownIcon fontSize="large" /> */}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`categories-container ${
              categoriesHover && "categories-container-opened"
            }`}
          >
            <ul className="categories-ul">{links}</ul>
          </div>
        </nav>
      ) : (
        <nav className={"mobile-navigation"}>
          <div className="menu-icons">
            {menuOpened ? (
              <CloseIcon
                onClick={() => setMenuOpened(false)}
                className="menu-icon "
                fontSize="large"
              />
            ) : (
              <MenuIcon
                onClick={() => setMenuOpened(true)}
                className="menu-icon "
                fontSize="large"
                style={{
                  marginLeft: "auto",
                  // justifySelf: "flex-end",
                }}
              />
            )}
          </div>

          <ul className={` mobile-ul ${menuOpened && "mobile-ul-opened"} `}>
            <li onClick={() => setCategoriesHover(!categoriesHover)}>
              Categories
            </li>
            <div
              className={`categories-container-mobile ${
                categoriesHover && "categories-container-mobile-open"
              } `}
            >
              <ul className="categories-ul-mobile">{links}</ul>
            </div>
            <li>
              {" "}
              <NavLink className={`${addActiveClass("/login")}`} to={"/login"}>
                Log in
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={`${addActiveClass("/register")}`}
                to={"/register"}
              >
                Register
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={`${addActiveClass("/user-page")}`}
                to={"/user-page"}
              >
                My profile
              </NavLink>
            </li>
            <li className="mobile-cart-li">
              <NavLink
                className={`${addActiveClass("/cart")}`}
                to={"/cart"}
                aria-label="View shopping cart, 2 items"
              >
                <p>Shopping cart</p>
                <div className="cart-nav cart-nav-mobile">
                  <ShoppingCartIcon fontSize="large" /> 2{" "}
                  {/* <KeyboardArrowDownIcon fontSize="large" /> */}
                </div>
              </NavLink>{" "}
            </li>
          </ul>
          <div
            onClick={closeNavigation}
            className={`touch-to-close ${
              menuOpened && "touch-to-close-visible"
            }`}
          ></div>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
