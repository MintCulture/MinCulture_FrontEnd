import React from 'react';
import styled from 'styled-components';

import {useRecoilValue, useSetRecoilState} from "recoil"

import {walletState, signedInState, mainState} from "../recoil/recoilState"

// ===== import style =====
import {H1} from "../styles/H1"
import {Img} from "../styles/Img"
import {Div} from "../styles/Div"
import {Button} from "../styles/Button"
import {P} from "../styles/P"

//===== import image =====
import logo from '../imgs/icons/Logo_image.png';
import Search from '../imgs/icons/Search_image.png';
import Wallet from '../imgs/icons/Wallet_image.png';
import SignOut from '../imgs/icons/SignedOut_image.png';
import MyProfile from '../imgs/images/image_Circle_small_4.png';

const HeaderDiv = styled(Div)`
  z-index: 1;
`

const RelativeDiv = styled(Div)`
  position: relative;
`

const AbsoluteImg = styled(Img)`
  position: absolute;
  height : 20px;
  left : 15px;
  top : 13px;
`

const Header = () =>{

    const wallet=useRecoilValue(walletState)
    const isSignedIn=useRecoilValue(signedInState)
    const setMainState = useSetRecoilState(mainState)
      

    console.log(isSignedIn)
    

  const signIn = () => { wallet.signIn() }

  const signOut = () => { wallet.signOut() }


  return (
    <HeaderDiv width="100%" height="70px" background_color="grayscale4" flex_style="flexSpaceAround" position="fixed">
      
      <Div width="190px" height="100%" flex_style="flexSpaceBetween">
        <Img src={logo} height="50px"/>
        <H1 font_size="m">
          MINTculture
        </H1>
      </Div>

      <Div width="50%" height="90%" flex_style="flexCenter">
        <RelativeDiv width="90%" height="70%" background_color="grayscale3" flex_style="flexCenter" border_radius="5px" >
          <AbsoluteImg src={Search}/>
        </RelativeDiv>
      </Div>

      <Div width="18%" height="100%" flex_style="flexCenter">
      {/* <Button background_color="none"  onClick={signIn}><Img height="40px" src={Wallet}/></Button> */}
          {
            isSignedIn
              ? 
              <>
                <Img height="35px" src={MyProfile} onClick={()=>setMainState("profile")}/>
                <P margin="0 0 0 5px" font_size="xs" >Hello! {wallet.accountId}</P>
                <Button margin="0 0 0 5px" background_color="none" onClick={signOut}><Img height="30px" src={SignOut}/></Button>
              </>
              : 
                <Button background_color="none"  onClick={signIn}><Img height="40px" src={Wallet}/></Button> 
          }
      </Div>
    </HeaderDiv>
  );
}

export default Header