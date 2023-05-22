import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

const pizzaLogoLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BPnrca1z_lTwom8TaRkY3mmRp5Z9VoJlXw&usqp=CAU";

export default function index() {
  // const { cart } = useSelector((state) => state.cart);

  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">
        <img 
          alt={"pix=zza-logo"}
          src={pizzaLogoLink}
          style={{
            height: 45,
            width: 60,
            borderRadius: 50,
            padding: 3,
          }}
        />
        Delivero
      </NavbarBrand>
      <div id="link-container">
        <Link className="lk-1" to={"/product-listing"}>Food Item's</Link>
        {/* <Link className="lk-1" to={"/orders"}>Orders</Link> */}
        <Link className="lk-1" to={"/cart"}>Cart</Link>
        <Link className="lk-1" to={"/"}>Logout</Link>
      </div>
    </Navbar>
  );
}
