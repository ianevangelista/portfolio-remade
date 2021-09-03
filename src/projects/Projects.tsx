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
            <div className="projects">
                <div className="projects__timeline--container">
                    <p className="jkl-body projects__text">Now</p>

                    <div className="projects__timeline--line" />
                    <p className="jkl-body projects__text">Some time ago</p>
                </div>
                <div className="projects__projects--column">
                    {MyProjects.map((p, i) => {
                        return (
                            <ProjectCard
                                inverted={(i + 1) % 2 !== 1}
                                key={p.id}
                                project={p}
                            />
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
};
