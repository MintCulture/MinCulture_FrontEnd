import React from 'react';
import {useRecoilValue} from "recoil"

import {mainState} from "../recoil/recoilState"

import Home from "./mains/Home"
import Profile from "./mains/Profile"
import Streaming from "./mains/Streaming"

// ===== import style =====
import styled from 'styled-components';
import {Div,ShadowDiv} from "../styles/Div"

const MainDiv =styled(Div)`
  justify-content: center;
`


const Main = () =>{

  const main = useRecoilValue(mainState)

  return (
    <>
        <MainDiv>
      
          {main == "home" && <Home/>}
          {main == "streaming" && <Streaming/>}
          {main == "profile" && <Profile/>}
      
        </MainDiv>
    </>
  );
}

export default Main