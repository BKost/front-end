import { useState, useEffect, useContext } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";
import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useUserContext } from "../../context/UserContext";

function Navigation() {
  const { screenWidth } = useScreenWidth();
  const [categoriesHover, setCategoriesHover] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const { numberOfItems } = useContext(CartContext);
  const { setShowLogout } = useUserContext();

  const { category: categoryParam } = useParams();
  const { pathname } = useLocation();

  const { isLoggedIn } = useUserContext();

  const categories = [
    {
      category: "Electronics",
      path: "Electronics",
    },
    {
      category: "Home",
      path: "Home",
    },
    {
      category: "Cars",
      path: "Cars",
    },
    {
      category: "Digital",
      path: "Digital",
    },
  ];

  const links = categories.map((item, index) => (
    <NavLink
      key={`nav-link-key-${index}`}
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
  }

  useEffect(() => {
    addActiveClass();
  }, []);

  function closeNavigation() {
    setMenuOpened(false);
    setCategoriesHover(false);
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
              <li>
                <NavLink className={`${addActiveClass("/")}`} to={"/"}>
                  About
                </NavLink>
              </li>
              <li
                className="cursor-pointer"
                onMouseEnter={() => setCategoriesHover(true)}
              >
                Categories
              </li>
            </ul>
            <ul className="ul-right">
              {!isLoggedIn && (
                <li>
                  <NavLink
                    className={`${addActiveClass("/login")}`}
                    to={"/login"}
                  >
                    Log in
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  {" "}
                  <NavLink to={"/"} onClick={() => setShowLogout(true)}>
                    Log out
                  </NavLink>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <NavLink
                    className={`${addActiveClass("/register")}`}
                    to={"/register"}
                  >
                    Register
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <NavLink
                    className={`${addActiveClass("/user-page")}`}
                    to={"/user-page"}
                  >
                    My profile
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  {" "}
                  <NavLink
                    className={`${addActiveClass("/my-listings")}`}
                    to={"/my-listings"}
                  >
                    My listings
                  </NavLink>
                </li>
              )}
              <li className="cart-li">
                <NavLink to={"/cart"} aria-label="View shopping cart, 2 items">
                  <div className="cart-nav">
                    <ShoppingCartIcon fontSize="large" /> {numberOfItems}
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
                }}
              />
            )}
          </div>

          <ul className={`mobile-ul ${menuOpened && "mobile-ul-opened"} `}>
            <li>
              <NavLink className={`${addActiveClass("/")}`} to={"/"}>
                About
              </NavLink>
            </li>
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
            {!isLoggedIn && (
              <li>
                {" "}
                <NavLink
                  className={`${addActiveClass("/login")}`}
                  to={"/login"}
                >
                  Log in
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                {" "}
                <NavLink to={"/"} onClick={() => setShowLogout(true)}>
                  Log out
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <NavLink
                  className={`${addActiveClass("/register")}`}
                  to={"/register"}
                >
                  Register
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                {" "}
                <NavLink
                  className={`${addActiveClass("/user-page")}`}
                  to={"/user-page"}
                >
                  My profile
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                {" "}
                <NavLink
                  className={`${addActiveClass("/my-listings")}`}
                  to={"/my-listings"}
                >
                  My listings
                </NavLink>
              </li>
            )}
            <li className="mobile-cart-li">
              <NavLink
                className={`${addActiveClass("/cart")}`}
                to={"/cart"}
                aria-label="View shopping cart, 2 items"
              >
                <p>Shopping cart</p>
                <div className="cart-nav cart-nav-mobile">
                  <ShoppingCartIcon fontSize="large" /> {numberOfItems}
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
