import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Form, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar.jsx";
import BrandBar from "../components/BrandBar.jsx";

const Shop = () => {
    return (
        <Container>
           <Form className="mt-2" style={{display:'flex'}}>
               <Col md={3}>
                    <TypeBar />
               </Col>
               <Col md={9}>
                    <BrandBar />
               </Col>
           </Form>
        </Container>
    );
};

export default Shop;