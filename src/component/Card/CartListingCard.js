import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { Col, Row, Card, CardTitle, CardText, Button } from "reactstrap";
// import QuantityButton from "../QuantityButton";

export default function CartListingCard({ data = {} }) {

  const navigate = useNavigate();

  const makePayment = (token) => {
    const body = {
      token,
      data,
    };
     const headers = {
      "Content-type":"appliccation/json"
     };
      return fetch("http://localhost:4000/payment",{
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then((response) => {
      navigate("/product-listing");
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <Row className="mb-1">
      <Col sm="12" md="12" lg="12">
        <Card className="cart-item-card">
          <Row>
            <Col sm="6" md="6" lg="6">
              <img width={"250px"} src={data.image} />
            </Col>
            <Col className="py-3 ml-5">
              <CardTitle tag="h6"><b>{data.name}</b></CardTitle>
              {/* <QuantityButton quantity={data.quantity} /> */}
              <p><b>{data.price}</b></p>
            </Col>
          </Row>
          <div>
        <StripeCheckout
        stripeKey="pk_test_51N2XAPSInoBADsEnXnLidneOVwfTWpLCoAOO39k7WWyzUT2sGGe05kMEmnMZBxapZZW9Kv5odnIl7XfEir07A9Ln00mBng7jWk"
        name={data.name}
        amount={data.price}
        currency="INR"
        token={makePayment}
        >
        <button className="checkout-button"><span className="checkout">Checkout</span></button>
        </StripeCheckout>
        
      </div>
        </Card>
      </Col>
    </Row>
  );
}
