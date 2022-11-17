import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "./doctors";
import userReducer from "./user";
import profileReducer from "./profile";
import appointmentsReducer from "./patientAppointments";

export default configureStore({
  reducer: {
    user: userReducer,
    doctors: doctorsReducer,
    profile: profileReducer,
    appointments: appointmentsReducer,
  },
});
