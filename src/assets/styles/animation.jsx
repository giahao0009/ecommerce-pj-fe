import { keyframes } from "styled-components";

export const moveFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(200%);
    }
    to {
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const moveFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-200%) ;
    }
    to {
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const moveFromTop = keyframes`
    from {
        opacity: 0;
        transform: translateY(200%) ;
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`;
