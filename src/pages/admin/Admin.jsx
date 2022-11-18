import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import apiObject from "../../api";
import AdminHome from "./AdminHome";
import AdminPatients from "./AdminPatients";

function Admin() {
  const [doctors, setDoctors] = useState([]);
  const [patient, setPatient] = useState([]);
  const history = useHistory();
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    (async () => {
      try {
        if (user?.accessToken && user?.role === "Admin") {
          const resDoctors = await apiObject.getAdminDoctors(user?.accessToken);
          const resPatient = await apiObject.getAdminPatient(user?.accessToken);
          setDoctors(resDoctors);
          setPatient(resPatient);
        } else {
          history.replace("/login");
        }
      } catch (error) {
        console.log(error, doctors);
      }
    })();

    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <Route path="/admin" exact component={AdminHome}></Route>
      <Route
        path="/admin/view-patients"
        render={() => <AdminPatients patient={patient} />}
      ></Route>
    </>
  );
}

export default Admin;
