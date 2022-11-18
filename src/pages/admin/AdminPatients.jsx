import React, { useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";

function AdminPatients({ patient }) {
  const [show, setShow] = useState(false);
  const [currentPatient, setCurrentPatient] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const viewMorePatient = (id) => {
    setCurrentPatient(patient[id]);
    handleShow();
  };

  const AllPatients = patient?.map((patient, id) => {
    return (
      <tr>
        <td>
          {patient.name} {patient.surname}
        </td>
        <td>{patient.email}</td>
        <td>{patient.phoneNumber}</td>
        <td>
          <Button
            onClick={() => {
              viewMorePatient(id);
            }}
          >
            Read more
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Container>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>{AllPatients}</tbody>
        </Table>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{currentPatient.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          email: {currentPatient.email}
          <br />
          Full Name: {currentPatient.name} {currentPatient.surname}
          <br />
          Birth Date: {currentPatient.birthDate}
          <br />
          Birth Place: {currentPatient.birthPlace}
          <br />
          Gender: {currentPatient.gender}
          <br />
          Phone Number : {currentPatient.phoneNumber}
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminPatients;
