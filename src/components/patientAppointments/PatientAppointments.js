import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import apiObject from "../../api";
import { getUser } from "../../utils";
function PatientAppointments() {
  const appointments = useSelector((store) => store.appointments.appointments);
  const { profile } = useSelector((store) => store.profile);

  const history = useHistory();
  const cancelAppointments = (id) => {
    apiObject.deleteAppointments(getUser().accessToken, id, history);
  };

  const allAppointments = appointments
    ?.filter((el) => el.name === profile.name)
    .sort((a, b) => Number(b.completionStatus) - Number(a.completionStatus))
    .map((app) => {
      return (
        <tr key={app.id}>
          <td>{app.id}</td>
          <td>{app.name}</td>
          <td>{app.surname}</td>
          <td>{app.serviceName}</td>
          <td>{app.date}</td>
          <td>{app.note}</td>
          <td>{app.startingHour}</td>
          <td>{app.completionStatus.toString()}</td>
          <td>
            {!app.completionStatus && (
              <Button
                onClick={() => {
                  cancelAppointments(app.id);
                }}
                variant="danger"
              >
                Cancel Appointments
              </Button>
            )}
          </td>
        </tr>
      );
    });

  return (
    <Container fluid="md">
      <Table className="mt-5" size="sm" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Service Name</th>
            <th>Date</th>
            <th>Note</th>
            <th>Starting Hour</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{allAppointments}</tbody>
      </Table>
    </Container>
  );
}

export default PatientAppointments;
