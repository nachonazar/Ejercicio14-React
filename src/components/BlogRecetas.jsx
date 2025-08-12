import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";

const BlogRecetas = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Blog de recetas</h1>
      <Row>
        <Col>
          <Card className="mx-5 mt-4 d-flex flex-row">
            <Card className="img"></Card>
            <Card.Body className="mx-5 text-start">
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Ver receta</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BlogRecetas;
