import React from 'react';

// ===== import style =====
import {H1} from "../styles/H1"
import {Img} from "../styles/Img"
import {Div} from "../styles/Div"
import {Button} from "../styles/Button"

const Nav = () =>{

  return (
        // sideMenuOpenValue
        // ?   
            <Div width="270px" height="1500px" margin_top="70px" flex_direction="column" position="fixed" background_color="grayscale2" >
              {/* {
                  navIconData.map((value, index)=>{
                      return <ImgTextBtn id={index} shape="round" color="black" size="small" flex_direction="row" flex_style="flexLeftCenter" data={value}/>
                  })
              }   */}
            </Div>
        // :
        //     <Div width="80px" margin_top="70px" flex_direction="column" position="fixed" background_color="#181818" onClick={sideMenuBtnEvent}>
        //       {
        //           navIconData.map((value, index)=>{
        //               return <ImgTextBtn id={index} shape="round" color="black" size="medium" flex_direction="column" flex_style="flexCenter" data={value}/>
        //           })
        //       }  
        //     </Div>
  );
}

export default Nav