// ===== import base =====
import styled, {css} from "styled-components"

// ===== import style func =====
import {color} from "./style"

export const Div = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flex_direction || `row`};
    ${(props) => FLEX_STYLE[props.flex_style] || FLEX_STYLE["flexCenter"]}

    position: ${(props) => props.flex_direction || `static`};

    width: ${(props) => props.width || "auto"};
    max-width: ${(props) => props.max_width || "auto"};
    min-width: ${(props) => props.min_width || "auto"};
    height: ${(props) => props.height || "auto"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    border: ${(props) => props.border || "none"};
    border-radius: ${(props) => props.border_radius || "none"};
    background-color: ${(props) => color(props.background_color) || "none"}; 
    
`
export const ShadowDiv = styled(Div)`
    box-shadow : 0px 0px 8px rgba(0, 0, 0, 0.25);
`

const FLEX_STYLE = {
    flexCenter : css`
        align-items: center;
        justify-content: center;
    `,
    flexLeftCenter : css`
        align-items: center;
        justify-content: start;
    `,
    flexRightCenter : css`
        align-items: center;
        justify-content: end;
    `,
    flexTopCenter : css`
    align-items: end;
        justify-content: center;
    `,
    flexBottomCenter : css`
         align-items: start;
        justify-content: center;
        
    `,
    flexSpaceBetween : css`
        align-items: center;
        justify-content: space-between;
    `,
    flexSpaceAround : css`
        align-items: center;
        justify-content: space-around;
    `,
}