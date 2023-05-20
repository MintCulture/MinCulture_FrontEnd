import styled, {css} from "styled-components"

export const fontSize = (font_size)=>{
    if(font_size === "xxxs") return "10px"
    if(font_size === "xxs") return "13px"
    if(font_size === "xs") return "16px"
    if(font_size === "s") return "20px"
    if(font_size === "m") return "24px"
    if(font_size === "l") return "32px"
    if(font_size === "xl") return "36px"
    if(font_size === "xxl") return "48px"
    if(font_size === "xxxl") return "64px"
}

export const color = (color) =>{
    if(color === "grayscale1") return "#FFFFFF"
    if(color === "grayscale2") return "#DCDCDC"
    if(color === "grayscale3") return "#191919"
    if(color === "grayscale4") return "#101010"
    if(color === "blue1") return "#639DFF"
    if(color === "blue2") return "#2476FF"
    if(color === "blue3") return "#1461E3"
    if(color === "purple") return "#A114E3"
    if(color === "red") return "#FF4E4E"
}

export const fontWeight = (font_weight) =>{
    if( font_weight === "light") return css`
        @font-face {
            font-family: "NotoSansKR-Regular";
            src: url("../fonts/NotoSansKR-Regular.otf");
        }
        font-family: "NotoSansKR-Regular";
    `
    else if( font_weight === "regular") return css`
        @font-face {
            font-family: "NotoSansKR-Bold";
            src: url("../fonts/NotoSansKR-Bold.otf");
        }
        font-family: "NotoSansKR-Bold";
    `
    else if( font_weight === "bold") return css`
        @font-face {
            font-family: "NotoSansKR-Black";
            src: url("../fonts/NotoSansKR-Black.otf");
        } 
        font-family: "NotoSansKR-Black";
    `
}