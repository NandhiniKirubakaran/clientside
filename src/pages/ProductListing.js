import React from "react";
import ImageSlider from "../component/imageSlider";
import ProductCard from "../component/Card";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../Redux/Reducers/cart.slice";



export const foods = [];

export default function ProductListing(){
    const { items = [] } = useSelector((state) => state.product);
    const dispatcher = useDispatch()

    const handleCart = (data) => {
        if(data.name){
            dispatcher(addItemToCart(data));
        }
    };

    return(
        <div className="">
            <ImageSlider />
            <div className="h-40"> </div>
            <div className="product-listing-container" id="product-listing-container">
            <Container>
                <Row>
                    {
                        items && items.map((food, i) => <Col key={i} className="col-lg-3">
                        <ProductCard   data={food} onAddToCart={handleCart} />
                    </Col>  )  
                    }
                </Row>
            </Container>
               
            </div>
        </div>
    );
}