import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import Reviews from "./Pages/Reviews";
import Appointment from "./Pages/Appointment";
import MyAccount from "./Pages/MyAccount";


function App() {

  return (
    <>
        <Router>
            <NaviBar />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/reviews"} component={Reviews} />
                <Route exact path={"/appointment"} component={Appointment} />
                <Route exact path={"/myAccount"} component={MyAccount} />
            </Switch>
        </Router>
        <Footer />
    </>
  );
}

export default App;
