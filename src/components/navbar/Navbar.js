import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user";
import { saveUser, getUser } from "../../utils";
import { setDoctors } from "../../store/doctors";
import { Button } from "react-bootstrap";
import AdminSideBar from "../../pages/admin/AdminSideBar";
function Navbar() {
  const dispatch = useDispatch();
  // const { user } = useSelector((store) => store.user);

  const userToken = getUser();

  const onLogout = () => {
    dispatch(setUser({}));
    dispatch(setDoctors([]));
    saveUser({});
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-light bg-light border-bottom border-success">
      <Link to="/">
        <div className="navbar-brand ml-2">
          <img
            src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          {"  "} Clinic
        </div>
      </Link>

      <ul className="nav">
        {!userToken.accessToken && (
          <>
            <li className="nav-item">
              <span href="/" className="navbar-brand">
                Home
              </span>
            </li>
            <li className="nav-item">
              <span href="/" className="navbar-brand">
                Services
              </span>
            </li>
            <li className="nav-item">
              <span className="navbar-brand">Testimonials</span>
            </li>
            <li className="nav-item mr-2">
              <Link to="/login">
                <button className="btn btn-success">Login</button>
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link to="/register">
                <button className="btn btn-success">Register</button>
              </Link>
            </li>
          </>
        )}
        <li className="nav-item mr-2">
          {userToken.accessToken !== undefined && (
            <>
              <Button className="ml-2" variant="danger" onClick={onLogout}>
                Logoout
              </Button>
            </>
          )}
        </li>
        <li className="nav-item mr-2">
          {userToken.role === "Admin" && (
            <>
              <AdminSideBar />
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
