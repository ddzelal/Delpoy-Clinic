import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import AboutYou from "../../components/aboutYou/AboutYou";
import Appointments from "../../components/appointments/Appointments";
import DoctorsList from "../../components/doctors/DoctorsList";
import PatientAppointments from "../../components/patientAppointments/PatientAppointments";
import { getDoctors } from "../../store/doctors";
import { getPatientAppointments } from "../../store/patientAppointments";
import { getProfile } from "../../store/profile";

const Patient = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((store) => store.user);

  const { profile } = useSelector((store) => store.profile);

  const getDataFromState = useCallback(() => {
    // console.log(user?.accessToken, "USER ACCES TOKEN");
    dispatch(getProfile(user?.accessToken));
    if (user?.accessToken) {
      dispatch(getDoctors(user?.accessToken));
      dispatch(getPatientAppointments(user?.accessToken));
    } else {
      history.replace("/login");
    }
  }, [dispatch, history, user?.accessToken]);

  useEffect(() => {
    getDataFromState();
  }, [getDataFromState]);

  return (
    <>
      <AboutYou profile={profile} />
      <Route
        path="/patient/appointments"
        render={() => <Appointments />}
      ></Route>
      <Route exact path="/patient" component={DoctorsList}></Route>
      <Route
        path="/patient/your-appointments"
        component={PatientAppointments}
      ></Route>
    </>
  );
};

export default Patient;
