import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "@fremtind/jkl-core/core.min.css";
import "./index.scss";
import { About } from "./about/About";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";
import { ProjectPage } from "./projects/Project";

const Routes = (
    <div className="index">
        <Router>
            <Switch>
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/"}
                    component={Home}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/about"}
                    component={About}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/projects"}
                    component={Projects}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/projects/:id"}
                    component={ProjectPage}
                />
            </Switch>
        </Router>
    </div>
);

ReactDOM.render(Routes, document.getElementById("root"));
