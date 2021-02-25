import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import LineChartPart from "./components/Charts/LineChartPart";
import AreaChartPart from "./components/Charts/AreaChartPart";
import MixChartPart from "./components/Charts/MixChartPart";

import useStyles from "./styles/index";

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <div className={classes.root}>
          <Navbar />
          <Sidemenu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/charts/line" component={LineChartPart} />
            <Route path="/charts/area" component={AreaChartPart} />
            <Route path="/charts/mix" component={MixChartPart} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
