import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "@fremtind/jkl-core/core.min.css";
import "./index.scss";
import { About } from "./about/About";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";

const Routes = (
    <div className="index">
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
            </Switch>
        </Router>
    </div>
);

ReactDOM.render(Routes, document.getElementById("root"));
