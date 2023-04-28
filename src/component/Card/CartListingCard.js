import React from "react";
import { Col, Row, Card, CardTitle, CardText, Button } from "reactstrap";
import QuantityButton from "../QuantityButton";

export default function CartListingCard({ data = {} }) {
  return (
    <Row className="mb-1">
      <Col sm="12" md="12" lg="12">
        <Card className="cart-item-card">
          <Row>
            <Col sm="6" md="6" lg="6">
              <img width={"200px"} src={data.image} />
            </Col>
            <Col className="py-3 ml-5">
              <CardTitle tag="h6">{data.name}</CardTitle>
              <QuantityButton quantity={data.quantity} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
