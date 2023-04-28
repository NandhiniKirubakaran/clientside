import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";


export default function ProductCard({ data = {}, onAddToCart = (item) => {} }) {
  return (
    <Card className="card-size"
      style={{
        width: "18rem",
      }}
    >
      <img className="img-size" alt="Sample" src={data.image} />
      <CardBody>
        <CardTitle tag="h6"><b>{data.name}</b></CardTitle>
        <CardText className="mb-2">{data.description}</CardText>
        <div className="button-container">
          <CardSubtitle className="text-danger" tag="h6">{data.price}</CardSubtitle>
          <Button onClick={() => onAddToCart(data)}>
          Add to Cart   
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
