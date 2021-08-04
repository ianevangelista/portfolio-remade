import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";

import { Wrapper } from "../components/wrapper/Wrapper";
import { Hobbies } from "../utils/about/hobbies-text";
import { Educations } from "../utils/about/education-text";
import { Experiences } from "../utils/about/experience-text";
import img from "./pic.jpg";
import "./About.scss";

export const About = () => {
    return (
        <Wrapper animation compactAutoHeight>
            <div className="about__content">
                <div>
                    <div className="about__image-box">
                        <img className="about__image" src={img} alt="Logo" />
                    </div>
                    <div>
                        <div className="jkl-layout-spacing--small-top">
                            <p className="jkl-body about">
                                M.Sc. Student Computer Science
                            </p>
                            <p className="jkl-body about">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about__accordion-row">
                    <Accordion>
                        <AccordionItem
                            className="about__accordion-item"
                            title="Hobbies and interests"
                        >
                            <UnorderedList>
                                {Hobbies.map((hobby) => {
                                    return (
                                        <ListItem className="jkl-small">
                                            <p className="about__bold">
                                                {hobby.title}
                                            </p>
                                            <p>{hobby.description}</p>
                                        </ListItem>
                                    );
                                })}
                            </UnorderedList>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem
                            className="about__accordion-item"
                            title="Education"
                        >
                            <UnorderedList>
                                {Educations.map((e) => {
                                    return (
                                        <ListItem className="jkl-small">
                                            <p className="about__bold">
                                                {e.study}
                                            </p>
                                            <p>{e.school}</p>
                                            <p>{e.duration}</p>
                                        </ListItem>
                                    );
                                })}
                            </UnorderedList>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem
                            className="about__accordion-item"
                            title="Experience"
                        >
                            <UnorderedList>
                                {Experiences.map((e) => {
                                    return (
                                        <ListItem className="jkl-small">
                                            <p className="about__bold">
                                                {e.employer}
                                            </p>
                                            <p>{e.title}</p>
                                            <p>{e.duration}</p>
                                        </ListItem>
                                    );
                                })}
                            </UnorderedList>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </Wrapper>
    );
};
