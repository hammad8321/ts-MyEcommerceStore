import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { sampleProducts } from "../data";
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
        
        <Row bg="primary" variant="dark" expand="lg">
            {sampleProducts.map((p, i) => (
              <Col key={i} sm={6} md={4} lg={3}>
                <Link to={'/product/' +  p.slug  } >
                <img src={p.image} alt={p.name} className="product-image" />
                <h2>{p.name}</h2>
                <p>${p.price}</p>
                </Link>
                
              </Col>
            ))}
          </Row>

    </div>
  )
}
