import axios from "axios";
import { getUser } from "../utils";

const userStorage = getUser();

const instance = axios.create({
  baseURL: "https://www.clinicwetrust.com/controllers/",
  headers: {
    "Content-Type": "application/json",
    Authorization: userStorage.accessToken,
  },
});

const login = async (user) => {
  try {
    const { data } = await axios.post(
      "https://www.clinicwetrust.com/controllers/SessionController.php",
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error.response.data.messages[0]);
  }
};

const register = async (user, history) => {
  try {
    const { data } = await instance.post(
      "UserController.php",
      JSON.stringify(user)
    );
    history.push("/login");
    return data.data;
  } catch (error) {
    console.log(error.response.data.messages);
  }
};

const getProfile = async (token) => {
  const { data } = await axios.get(
    "https://www.clinicwetrust.com/controllers/PatientController.php?fetch=profile",
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return data.data;
};

const getAllDoctors = async (token) => {
  try {
    const { data } = await instance.get("PatientController.php?fetch=doctors", {
      headers: {
        Authorization: token,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error.response.data.messages);
  }
};

const createAppointments = async (token, body, history) => {
  try {
    const { data } = await instance.post(
      "AppointmentController.php",
      JSON.stringify(body),
      {
        headers: {
          Authorization: token,
        },
      }
    );
    // getAllPatientAppointments(token);
    history.push("/patient");
    return data.data;
  } catch (error) {
    alert(error.response.data.messages);
  }
};

const requestChangeDoctor = async (token, body) => {
  try {
    const { data } = await instance.post(
      "PatientController.php",
      JSON.stringify(body),
      {
        headers: {
          Authorization: token,
        },
      }
    );

    alert(data.messages);

    return data.data;
  } catch (error) {
    return;
  }
};

const getAllPatientAppointments = async (token) => {
  try {
    const { data } = await instance.get("AppointmentController.php", {
      headers: {
        Authorization: token,
      },
    });
    console.log(data.data, "DATA API APPOINTMENTS");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteAppointments = async (token, id, history) => {
  try {
    const { data } = await instance.delete(
      `AppointmentController.php?appointmentId=${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    window.location.reload();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const apiObject = {
  login,
  register,
  getAllDoctors,
  getProfile,
  createAppointments,
  requestChangeDoctor,
  getAllPatientAppointments,
  deleteAppointments,
};

export default apiObject;
