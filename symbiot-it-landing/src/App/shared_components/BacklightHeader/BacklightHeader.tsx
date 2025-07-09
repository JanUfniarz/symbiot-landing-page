import React, {useRef} from "react";

import styles from "./BacklightHeader.module.css"
import handleMouseMove from "./BacklightHeader_logic";

interface BacklightHeaderProps {
    children?: React.ReactNode
}
const BacklightHeader: React.FC<BacklightHeaderProps> = (
    {children }
) => {
    const headerRef = useRef<HTMLHeadingElement>(null);

    return <h2
        className={styles.header}
        ref={headerRef}
        onMouseMove={(e) => handleMouseMove(e, headerRef)}
    >
        <span>{ children }</span>
    </h2>;
}

export default BacklightHeader