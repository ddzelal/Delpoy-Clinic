import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

function ModalProfile({ profile }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        {">"}
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hello {profile?.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Alert variant="primary">Your information</Alert>
          <Alert variant="secondary">Name: {profile?.name}</Alert>
          <Alert variant="secondary">Surname: {profile?.surname}</Alert>
          <Alert variant="secondary">Email: {profile?.email}</Alert>
          <Alert variant="secondary">Birth Date: {profile?.birthDate}</Alert>
          <Alert variant="secondary">Birth Place: {profile?.birthPlace}</Alert>
          <Alert variant="secondary">Gender: {profile?.gender}</Alert>
          <Alert variant="secondary">
            <Link to="/patient/your-appointments">
              <Button className="btn btn-info btn-fluid">
                View Your Appointments
              </Button>
            </Link>
            <Link to="/patient/appointments">
              <button className="btn btn-info mt-2">Create Appointments</button>
            </Link>
          </Alert>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ModalProfile;
