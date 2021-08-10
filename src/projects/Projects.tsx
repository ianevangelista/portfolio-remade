import { Wrapper } from "../components/wrapper/Wrapper";
import { MyProjects, Project } from "../utils/projects/project-text";
import { ProjectCard } from "./ProjectCard";
import "./Projects.scss";

export const Projects = () => {
    const leftProjects: Project[] = [];
    const rightProjects: Project[] = [];

    MyProjects.forEach((p, i) => {
        if ((i + 1) % 2 === 1) leftProjects.push(p);
        else rightProjects.push(p);
    });

    return (
        <Wrapper animation moreContent>
            <div>
                <p className="jkl-body projects__text">Now</p>
            </div>

            <div className="projects__columns">
                {window.screen.width > 900 && (
                    <>
                        <div className="projects__col">
                            {leftProjects.map((p) => {
                                return <ProjectCard project={p} />;
                            })}
                        </div>
                        <div className="projects__col">
                            {rightProjects.map((p) => {
                                return <ProjectCard project={p} inverted />;
                            })}
                        </div>
                    </>
                )}
                {window.screen.width < 900 && (
                    <>
                        <div className="projects__col">
                            {MyProjects.map((p) => {
                                return <ProjectCard project={p} />;
                            })}
                        </div>
                    </>
                )}
                <div className="projects__timeline" />
            </div>
            <div>
                <p className="jkl-body projects__text">Some time ago</p>
            </div>
        </Wrapper>
    );
};
