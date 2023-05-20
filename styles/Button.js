// ===== import base =====
import styled,{css} from "styled-components"

// ===== import style func =====
import {color, fontSize, fontWeight} from "./style"

export const Button = styled.button`
    display: flex;
    flex-direction: ${(props) => props.flex_direction || `row`};
    ${(props) => FLEX_STYLE[props.flex_style] || "none"}
    cursor: pointer;
    border: none;
    width: ${(props)=> props.width || "auto"};
    max-width: ${(props)=> props.max_width || "auto"};
    height: ${(props)=> props.height || "auto"};
    margin: ${(props)=> props.margin || "0"};
    padding: ${(props)=> props.padding || "0"};
    border-radius: ${(props)=> props.border_radius || "5px"};
    
    // 버튼 초기설정 
    //배경 blue2 글씨 grayscale1 font-size m font-weight bold
    background-color: ${(props) => color(props.color) || color("blue2")};
    color: ${(props) => color(props.background_color) || color("grayscale1")};
    font-size: ${ (props) => fontSize(props.font_size) || fontSize("m")};
    ${ (props)=> fontWeight(props.font_weight)|| fontWeight("regular")};

    &:hover{
        background-color: ${(props) => color(props.color) || color("blue3")};
        transition: 0.5s;
    }
    &:not(:hover){
        transition: 0.5s;
    }
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