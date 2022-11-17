import React, { useState } from "react";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";


function Register() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    password: "",
    email: "",
    jmbg: "",
    birthDate: "",
    phoneNumber: "",
    gender: "",
    birthPlace: "",
  });

  const history = useHistory();

  const onRegister = (e) => {
    e.preventDefault();
    api.register(user,history)
    
    
  };

  return (
    <div id="register_container" className="bg-light">
      <div className="container">
        <form id="register_form_container" className="bg-light">
          <div id="register_form_group" className="form-group">
            <label placeholder="Enter name">Name</label>
            <input
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              type="name"
              className="form-control"
              placeholder="Enter name"
            />
            <label placeholder="Enter Surname">Surname</label>
            <input
              onChange={(e) => {
                setUser({ ...user, surname: e.target.value });
              }}
              type="text"
              className="form-control"
              placeholder="Enter surname"
            />
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <label placeholder="Enter JMBG">JMBG</label>
            <input
              onChange={(e) => {
                setUser({ ...user, jmbg: e.target.value });
              }}
              type="text"
              className="form-control"
              placeholder="Enter JMBG"
            />
            <label placeholder="Enter Birth">Birth day</label>
            <input
              onChange={(e) => {
                setUser({ ...user, birthDate: e.target.value });
              }}
              type="date"
              className="form-control"
              placeholder="Enter birth day"
            />
            <label placeholder="Enter Phone">Phone</label>
            <input
              onChange={(e) => {
                setUser({ ...user, phoneNumber: e.target.value });
              }}
              type="tel"
              className="form-control"
              placeholder="Enter Phone"
            />
            <label htmlFor="inputGender">Gender</label>
            <select
              onChange={(e) => {
                setUser({ ...user, gender: e.target.value });
              }}
              id="inputGender"
              className="form-control"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <label htmlFor="inputState">Country</label>
            <select
              onChange={(e) => {
                setUser({ ...user, birthPlace: e.target.value });
              }}
              id="inputState"
              className="form-control"
            >
              <option>Serbia</option>
              <option>Bosnia</option>
              <option>Albania</option>
            </select>
          </div>
          <div id="submit_register">
            <button onClick={onRegister} className="btn btn-primary">
              Submit
            </button>
            <Link to="/login">
              <p>Already have account?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
