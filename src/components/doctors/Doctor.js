import React from "react";
import "./doctor.css";
import api from "../../api";
import { useSelector } from "react-redux";

function Doctor({ doctor }) {
  const user = useSelector((store) => store.user.user);

  const sendRequestChangeDoctor = (id) => {
    api.requestChangeDoctor(user.accessToken, { requestedDoctorsId: id });
  };

  const doctorImgUrl =
    "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000";
  return (
    <div id="doctor_card" className="card mt-3">
      <div className="card-header">
        <h3>{doctor.name}</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <img id="doctorImgUrl" src={doctorImgUrl} alt=""></img>
          </div>
          <div className="col-4">
            <p>{doctor.name}</p>
            <p>{doctor.surname}</p>
            <p>{doctor.email}</p>
            <p>{doctor.phoneNumber}</p>
          </div>
        </div>
        <div className="card-footer">
          {doctor.assigned ? (
            <button type="button" className="btn btn-primary">
              Your selected Doctor
            </button>
          ) : (
            <button
              onClick={() => {
                sendRequestChangeDoctor(doctor.id);
              }}
              type="button"
              className="btn btn-danger"
            >
              Request change your Doctor
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctor;
