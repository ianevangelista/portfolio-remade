import { useHistory } from "react-router-dom";
import { Card } from "@fremtind/jkl-card-react";
import { Link } from "@fremtind/jkl-core";
import { Project } from "../utils/projects/project-text";
import classNames from "classnames";
import "./ProjectCard.scss";

interface Props {
    project: Project;
    inverted?: boolean;
    odd?: boolean;
}
export const ProjectCard = ({ project, inverted, odd }: Props) => {
    const history = useHistory();
    return (
        <div
            className={classNames("project-card", {
                "project-card--spacing": inverted,
            })}
        >
            <Card>
                <div className="project-card__title-container">
                    <p className="jkl-heading-1">{project.title}</p>
                </div>
                <p className="jkl-layout-spacing--xs-top jkl-small">
                    {project.description}
                </p>
                <div className="project-card__actions-container">
                    {project.github && (
                        <div className="jkl-layout-spacing--xs-top">
                            <Link
                                external
                                target="_blank"
                                href={project.github}
                                className="project-card__button"
                            >
                                Github
                            </Link>
                        </div>
                    )}
                    <div className="jkl-layout-spacing--xs-top">
                        <Link
                            onClick={() => {
                                history.push(`${project.path}`);
                            }}
                            className="project-card__button"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};
