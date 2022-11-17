import React, { useEffect, useState, useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Spinner } from "react-spinner-animated";
import Doctor from "./Doctor";

function DoctorsList() {
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const { doctors } = useSelector((store) => store.doctors);
  let inputValue = useRef();

  const searchDoctors = () => {
    setFilteredDoctors(
      doctors?.filter((d) => {
        return d.name
          .toLowerCase()
          .includes(inputValue.current.value.toLowerCase());
      })
    );
    inputValue.current.value = "";
  };

  const allDoctors = filteredDoctors?.map((doctor) => {
    return (
      <div className="col-6" key={doctor.id}>
        <Doctor doctor={doctor} />
      </div>
    );
  });

  useEffect(() => {
    setFilteredDoctors(doctors);
    // eslint-disable-next-line
  }, [doctors]);

  return (
    <div className="container">
      <div className="row mb-5 justify-content-md-center">
        <InputGroup className="mb-3">
          <Form.Control
            ref={inputValue}
            placeholder="Enter Doctor Name"
            aria-label="Enter Doctor Name"
            aria-describedby="basic-addon2"
          />
          <Button
            onClick={searchDoctors}
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="row">
        <div
          className="col-10 offset-1"
          style={{
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
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
