import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useSelector, useDispatch } from "react-redux";
import Patient from "./pages/Patient/Patient";
import { useEffect } from "react";
import { getUser } from "./utils";
import { setUser } from "./store/user";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";

function App() {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!user?.accessToken) {
      const userStorage = getUser();
      if (!userStorage.accessToken) {
        history.replace("/");
      } else {
        dispatch(setUser(userStorage));
      }
    }
    //dwadaw
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}>
          {user && <Redirect to={user?.role.toLowerCase()}></Redirect>}
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/doctor" component={() => <h1>Doctor</h1>} />
        <Route path="/admin" component={Admin} />
        <Route path="/patient" component={Patient} />
        <Route path="*" component={() => <h1>ERROR</h1>} />
      </Switch>
    </div>
  );
}

export default App;
