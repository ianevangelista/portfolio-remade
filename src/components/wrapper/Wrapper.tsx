import classNames from "classnames";
import { ReactNode } from "react";
import { Header } from "../header/Header";
import { motion, AnimatePresence } from "framer-motion";

import "./Wrapper.scss";

interface Props {
    children: ReactNode;
    animation?: boolean;
    moreContent?: boolean;
    compactAutoHeight?: boolean;
}
export const Wrapper = ({
    children,
    animation,
    moreContent,
    compactAutoHeight,
}: Props) => {
    return (
        <div
            className={classNames("wrapper__background", {
                "wrapper__background--more-content": moreContent,
                "wrapper__background--more-content-compact":
                    window.screen.width < 900 && !compactAutoHeight,
                "wrapper__background--more-content-compact-auto":
                    window.screen.width < 900 && compactAutoHeight,
            })}
        >
            <Header />
            {animation && (
                <AnimatePresence>
                    <motion.div
                        className="wrapper__content"
                        transition={{ duration: 2.5 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            )}
            {!animation && <div className="wrapper__content">{children}</div>}
        </div>
    );
};
