import React, {useRef} from "react";

import styles from "./BacklightHeader.module.css"
import handleMouseMove from "./BacklightHeader_logic";

const BacklightHeader: React.FC<{
    children?: React.ReactNode
}> = (
    {children}
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