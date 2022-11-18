import React from "react";
import { Card } from "react-bootstrap";

function AdminHome() {
  const date = new Date().toDateString();
  return (
    <div>
      <Card className="bg-dark text-white square bg-primary rounded-0">
        <Card.Img
          src="https://cdn.shopify.com/app-store/listing_images/9dfb92890d3c6c5d9c431d8072e3c5dc/banner/CPT5gb70lu8CEAE=.png"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Hello Admin</Card.Title>
          <Card.Text>{date}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default AdminHome;
