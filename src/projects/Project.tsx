import { TertiaryButton } from "@fremtind/jkl-button-react";
import { Link } from "@fremtind/jkl-core";
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
    const [openImages, setOpenImages] = useState<boolean>(false);

    useEffect(() => {
        setProject(
            MyProjects.find((p) => {
                return p.id === id;
            })
        );
    }, [id]);

    return (
        <Wrapper darkMode animation>
            <div className="project__title-row">
                <p className="jkl-heading-1">{project?.title}</p>
                <Link
                    className="project__github"
                    external
                    href={project?.github}
                    target="_blank"
                >
                    Github
                </Link>
            </div>
            <p className="jkl-layout-spacing--small-top jkl-heading-2">
                {project?.moreDescription}
            </p>
            {project?.images && (
                <TertiaryButton
                    forceCompact
                    className="jkl-layout-spacing--xs-top jkl-layout-spacing--medium-bottom"
                    onClick={() => setOpenImages(!openImages)}
                >
                    {openImages ? "Close" : "View images"}
                </TertiaryButton>
            )}
            {openImages && project?.images && (
                <div className="project__slideshow-container">
                    <ImageSlideshow images={project?.images} />
                </div>
            )}
        </Wrapper>
    );
};
