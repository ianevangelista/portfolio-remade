import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { Loader } from "@fremtind/jkl-loader-react";
import { NavLink } from "@fremtind/jkl-core";

import { Wrapper } from "../components/wrapper/Wrapper";
import Typist from "react-typist";

import "./Home.scss";

export const Home = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState<string>("");

    const history = useHistory();
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                history.push("/" + nextPage);
            }, 4000);

            return () => {
                clearTimeout(timer);
            };
        } else {
            isMounted.current = true;
        }
    }, [isLoading, history, nextPage]);

    return (
        <Wrapper>
            <p className="home__title">
                <Typist
                    cursor={{
                        show: false,
                    }}
                >
                    <p className="jkl-title">Hi, i am Ian</p>
                    <Typist.Delay ms={500} />
                    <br />
                    <p className="jkl-body">and welcome to my porfolio</p>
                    <div className="jkl-layout-spacing--medium-top">
                        <Typist.Delay ms={500} />
                        <br />
                        <p className="jkl-body">
                            <NavLink
                                className="home__link"
                                onClick={() => {
                                    setIsLoading(true);
                                    setNextPage("about");
                                }}
                            >
                                Get to know me more
                            </NavLink>
                        </p>
                        <Typist.Delay ms={500} />
                        <br />
                        <p className="jkl-body">
                            <NavLink
                                className="home__link"
                                onClick={() => {
                                    setIsLoading(true);
                                    setNextPage("projects");
                                }}
                            >
                                View some of my projects
                            </NavLink>
                        </p>
                    </div>
                </Typist>
                {isLoading && (
                    <Loader
                        className="jkl-layout-spacing--small-top"
                        textDescription="Loading"
                        negative
                    />
                )}
            </p>
        </Wrapper>
    );
};
