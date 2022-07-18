import { TertiaryButton } from "@fremtind/jkl-button-react";
import { Link } from "@fremtind/jkl-core";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../components/wrapper/Wrapper";
import { MyProjects, Project } from "../utils/projects/project-text";
import { ImageSlideshow } from "./ImageSlideshow";

import "./Project.scss";

interface ParamTypes {
    id: string;
}
export const ProjectPage = () => {
    let { id } = useParams<ParamTypes>();
    const [project, setProject] = useState<Project>();
    const [hideImages, setHideImages] = useState<boolean>(true);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(hideImages);

    useEffect(() => {
        setProject(
            MyProjects.find((p) => {
                return p.id === id;
            })
        );
    }, [id]);

    return (
        <Wrapper darkMode animation compactAutoHeight>
            <div className="project__title-row">
                <p className="jkl-heading-1">{project?.title}</p>
                {project?.github && (
                    <Link
                        className="project__github"
                        external
                        href={project?.github}
                        target="_blank"
                    >
                        Github
                    </Link>
                )}
            </div>
            <div
                className={`project__animation-wrapper ${
                    !hideImages && "project__animation-wrapper--hidden"
                }`}
                ref={animationRef}
            >
                <p className="jkl-heading-2 project__description">
                    {project?.moreDescription}
                </p>
            </div>
            {project?.images && (
                <TertiaryButton
                    forceCompact
                    className="jkl-layout-spacing--xs-top jkl-layout-spacing--medium-bottom project__button"
                    onClick={() => setHideImages(!hideImages)}
                >
                    {hideImages ? " View images" : "Hide images"}
                </TertiaryButton>
            )}
            {!hideImages && project?.images && (
                <div className="project__slideshow-container">
                    <ImageSlideshow images={project?.images} />
                </div>
            )}
        </Wrapper>
    );
};
