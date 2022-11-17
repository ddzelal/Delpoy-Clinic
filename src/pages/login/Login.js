import React, { useEffect, useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/user";
import { useHistory } from "react-router-dom";
import { getUser } from "../../utils";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector((store) => store.user.user);

  useEffect(() => {
    const userStorage = getUser();
    if (userStorage?.accessToken && userStorage.role) {
      history.replace(`/${userStorage.role.toLowerCase()}`);
    }
    // eslint-disable-next-line
  }, [userState]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault(e);
    dispatch(login(user));
  };

  return (
    <div id="login_container" className="bg-light">
      <div className="container">
        <form id="login_form_container" className="bg-light">
          <div className="form-group">
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
          </div>
          <div className="form-group">
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
          </div>
          <button onClick={onLogin} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
