import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Admin() {
  const history = useHistory();

  const { user } = useSelector((store) => store.user);

  console.log(user, "psoovanje Admine juzeru");

  useEffect(() => {
    if (user?.accessToken && user?.role === "Admin") {
    } else {
      history.replace("/login");
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <h1>Postovanje Admine!</h1>
    </>
  );
}

export default Admin;
