import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "@fremtind/jkl-core/core.min.css";
import "./index.scss";
import { About } from "./about/About";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";
import { ProjectPage } from "./projects/Project";

const App = () => {
    return (
        <div>
            <Switch>
                <Route path={"/about"}>
                    <About />
                </Route>
                <Route path={"/projects/:id"}>
                    <ProjectPage />
                </Route>
                <Route path={"/projects"}>
                    <Projects />
                </Route>

                <Route path={"/"}>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};

const Routes = (
    <div className="index">
        <Router>
            <App />
        </Router>
    </div>
);

ReactDOM.render(Routes, document.getElementById("root"));
