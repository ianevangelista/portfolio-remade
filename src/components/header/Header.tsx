import { NavLink } from "@fremtind/jkl-core";
import "./Header.scss";

export const Header = () => {
    return (
        <div className="header">
            <NavLink href="/">
                <p className="jkl-heading-1 header__title">Portfolio</p>
            </NavLink>
            <div className="header__links">
                <NavLink href="/about" className="header__link">
                    About
                </NavLink>
                <NavLink href="/projects" className="header__link">
                    Projects
                </NavLink>
                <NavLink href="./cv.pdf" className="header__link">
                    Curriculum Vitae
                </NavLink>
            </div>
        </div>
    );
};
