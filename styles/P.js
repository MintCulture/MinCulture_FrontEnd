// ===== import base =====
import styled from "styled-components"

// ===== import style func =====
import {color, fontSize, fontWeight} from "./style"

export const P = styled.p`
    width: fit-content;
    height: fit-content;
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    border-right: ${(props) => props.border_right || "none"};
    
    // font-size m font-weight light
    font-size: ${ (props) => fontSize(props.font_size) || fontSize("m")};
    color: ${ (props) => color(props.color) || color("grayscale1")};
    ${ (props)=> fontWeight(props.font_weight)|| fontWeight("light")};
`

export const LinkP = styled(P)`
    cursor:pointer;
`
export const NoneEventP = styled(P)`
    pointer-events: none;
`