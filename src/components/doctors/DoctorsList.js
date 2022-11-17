import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "react-spinner-animated";
import { getDoctors } from "../../store/doctors";
import { getUser } from "../../utils";
import Doctor from "./Doctor";

function DoctorsList() {
  const dispatch = useDispatch();
  // const history = useHistory();

  const { doctors } = useSelector((store) => store.doctors);
  console.log(doctors, "doctors");
  // const { user } = useSelector((store) => store.user);

  const allDoctors = doctors?.map((doctor) => {
    return (
      <div className="col-6" key={doctor.id}>
        <Doctor doctor={doctor} />
      </div>
    );
  });

  useEffect(() => {
    dispatch(getDoctors(getUser().accessToken));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-10 offset-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          {!doctors ? (
            <Spinner
              text={"Loading..."}
              width={"350px"}
              height={"350px"}
              center={true}
            />
          ) : (
            <div className="row">{allDoctors}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorsList;
