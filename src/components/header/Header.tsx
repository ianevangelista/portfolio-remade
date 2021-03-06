import { Link } from "@fremtind/jkl-core";
import { useHistory } from "react-router";
import "./Header.scss";

export const Header = () => {
    const history = useHistory();
    return (
        <div className="header">
            <Link href="/">
                <p className="jkl-heading-1 header__title">Portfolio</p>
            </Link>
            <div className="header__links">
                <Link
                    onClick={() => {
                        history.push("/about");
                    }}
                    className="header__link"
                >
                    About
                </Link>
                <Link
                    onClick={() => {
                        history.push("/projects");
                    }}
                    className="header__link"
                >
                    Projects
                </Link>
                <Link target="_blank" href="./cv.pdf" className="header__link">
                    Curriculum Vitae
                </Link>
            </div>
        </div>
    );
};
