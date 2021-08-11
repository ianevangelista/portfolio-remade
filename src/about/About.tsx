import { useState } from "react";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";

import { Wrapper } from "../components/wrapper/Wrapper";
import { Hobbies } from "../utils/about/hobbies-text";
import { Educations } from "../utils/about/education-text";
import { Experiences } from "../utils/about/experience-text";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { motion, AnimatePresence } from "framer-motion";

// @ts-ignore
import img from "./pic.jpg";
import "./About.scss";

export const About = () => {
    const [showPhone, setShowPhone] = useState<boolean>(false);
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
                            <div className="about__icons">
                                <GitHubIcon
                                    className="about__icon"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/ianevangelista",
                                            "_blank"
                                        )
                                    }
                                />

                                <LinkedInIcon
                                    className="about__icon"
                                    onClick={() =>
                                        window.open(
                                            "https://www.linkedin.com/in/ianevangelista/",
                                            "_blank"
                                        )
                                    }
                                />
                                <EmailIcon
                                    className="about__icon"
                                    onClick={() => {
                                        window.open(
                                            "mailto:ianevangelista1999@gmail.com?subject=Inquiry!&body=Hi, Ian!",
                                            "_blank"
                                        );
                                    }}
                                />
                                <div className="about__phone">
                                    <PhoneIphoneIcon
                                        className="about__icon"
                                        onClick={() => setShowPhone(!showPhone)}
                                    />
                                    <AnimatePresence>
                                        {showPhone && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <div className="about__phone-text">
                                                    +47 45049804
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
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
                                        <ListItem
                                            key={hobby.title}
                                            className="jkl-small"
                                        >
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
                                        <ListItem
                                            key={e.study}
                                            className="jkl-small"
                                        >
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
                                        <ListItem
                                            key={e.title}
                                            className="jkl-small"
                                        >
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
