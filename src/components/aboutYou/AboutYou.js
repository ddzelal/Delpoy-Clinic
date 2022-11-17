import React from "react";
import ModalProfile from "./ModalProfile";

function AboutYou({ profile }) {
  return (
    <>
      <div className="container-fluid">
        <div className="mt-2">
          <ModalProfile profile={profile} />
        </div>
      </div>
    </>
  );
}

export default AboutYou;
