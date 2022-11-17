import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import apiObject from "../../api";
import AdminSideBar from "./AdminSideBar";

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
        console.log(error);
      }
    })();

    // eslint-disable-next-line
  }, [user, doctors, patient]);

  return (
    <>
      <AdminSideBar />
    </>
  );
}

export default Admin;
