import React from "react";

const handleMouseMove = (
    e: React.MouseEvent<HTMLHeadingElement>,
    ref: React.RefObject<HTMLHeadingElement | null>
) => {
    if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left + 20;
        const y = e.clientY - rect.top + 20;
        ref.current.style.setProperty('--x', `${x}px`);
        ref.current.style.setProperty('--y', `${y}px`);
    }
}

export default handleMouseMove