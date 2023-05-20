import React from 'react';
import styled from 'styled-components';

import {useRecoilValue} from "recoil"

import {walletState, signedInState} from "../recoil/recoilState"

// ===== import style =====
import {H1} from "../styles/H1"
import {Img} from "../styles/Img"
import {Div} from "../styles/Div"
import {P} from "../styles/P"

//===== import image =====


const RelativeDiv = styled(Div)`
  position: relative;
`

const NavBtn = () =>{


  return (
    <Div width="100%" height="60px" background_color="blue2" flex_style="flexSpaceAround">
     <Img/>
     <Div>
        <H1></H1>
        <P></P>
     </Div>
    </Div>
  );
}

export default NavBtn