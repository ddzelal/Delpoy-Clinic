import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../api";
import { getPatientAppointments } from "../../store/patientAppointments";

function Appointments() {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const history = useHistory();

  const [newAppointments, setNewAppointments] = useState({
    date: "",
    note: "",
    serviceName: "",
    startingHour: "",
  });

  const sendAppointments = () => {
    api.createAppointments(user.accessToken, newAppointments, history);
    dispatch(getPatientAppointments(user?.accessToken));

    // history.push("/patient");
  };

  return (
    <>
      <Container>
        <Row className="g-2 mt-4 p-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Select Date">
              <Form.Control
                className="mb-2"
                onChange={(e) => {
                  setNewAppointments({
                    ...newAppointments,
                    date: e.target.value,
                  });
                }}
                type="date"
                placeholder="Note"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Select services name"
            >
              <Form.Select
                className="mb-2"
                onChange={(e) => {
                  setNewAppointments({
                    ...newAppointments,
                    serviceName: e.target.value,
                  });
                }}
                aria-label="Floating label select example"
              >
                <option>Open this select menu</option>
                <option value="Traumatic pathology">Traumatic pathology</option>
                <option value="Static pathology">Static pathology</option>
                <option value="Osteotomy of the femur and tibia">
                  Osteotomy of the femur and tibia
                </option>
                <option value="Complex ligamentous injuries">
                  Complex ligamentous injuries
                </option>
                <option value="Treatment of shoulder instability and rotator cuff pathology">
                  Treatment of shoulder instability and rotator cuff pathology
                </option>
                <option value="Tendinopathy in athletes and muscle injuries">
                  Tendinopathy in athletes and muscle injuries
                </option>
                <option value="Primary knee prostheses">
                  Primary knee prostheses
                </option>
                <option value="Primary hip prostheses">
                  Primary hip prostheses
                </option>
              </Form.Select>
            </FloatingLabel>
            <Form.Select
              className="mb-2"
              onChange={(e) => {
                setNewAppointments({
                  ...newAppointments,
                  startingHour: Number(e.target.value),
                });
              }}
              aria-label="Floating label select example"
            >
              <option>Starting Hour</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </Form.Select>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                className="mb-2"
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={(e) => {
                  setNewAppointments({
                    ...newAppointments,
                    note: e.target.value,
                  });
                }}
              />
            </FloatingLabel>
            <Button onClick={sendAppointments} variant="success">
              Approve
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Appointments;
