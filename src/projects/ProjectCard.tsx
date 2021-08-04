import { Card } from "@fremtind/jkl-card-react";
import { Link } from "@fremtind/jkl-core";
import { Project } from "../utils/projects/project-text";
import classNames from "classnames";
import "./ProjectCard.scss";

interface Props {
    project: Project;
    inverted?: boolean;
}
export const ProjectCard = ({ project, inverted }: Props) => {
    return (
        <div
            className={classNames("", {
                "project-card__container": !inverted,
                "project-card__container--inverted": inverted,
            })}
        >
            <Card className="project-card">
                <div className="project-card__title-container">
                    <p className="jkl-heading-1">{project.title}</p>
                </div>
                <p className="jkl-layout-spacing--xs-top jkl-small">
                    {project.description}
                </p>
                <div className="jkl-layout-spacing--xs-top">
                    <Link external href="/" className="project-card__button ">
                        Github
                    </Link>
                </div>
            </Card>
            <div>
                <p className="project-card__text project-card__text--year jkl-small">
                    {project.year}
                </p>
                <hr className="project-card__timeline" />
            </div>
        </div>
    );
};
