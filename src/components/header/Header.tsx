import { Link } from "@fremtind/jkl-core";
import "./Header.scss";

export const Header = () => {
    return (
        <div className="header">
            <Link href="/">
                <p className="jkl-heading-1 header__title">Portfolio</p>
            </Link>
            <div className="header__links">
                <Link href="/about" className="header__link">
                    About
                </Link>
                <Link href="/projects" className="header__link">
                    Projects
                </Link>
                <Link href="./cv.pdf" className="header__link">
                    Curriculum Vitae
                </Link>
            </div>
        </div>
    );
};
