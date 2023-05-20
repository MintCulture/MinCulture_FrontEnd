import React from 'react';
import {useSetRecoilState,useRecoilValue} from "recoil"

import {mainState, walletState, contractState,signedInState} from "../../recoil/recoilState"

import * as nearAPI from "near-api-js";


// ===== import style =====
import {H1} from "../../styles/H1"
import {Img} from "../../styles/Img"
import {Div,ShadowDiv} from "../../styles/Div"
import {P} from "../../styles/P"
import styled from 'styled-components';

import * as fs from 'fs';

//===== import image =====
import MyProfile from '../../imgs/images/image_Circle_large_1.png';
import Subscribe from '../../imgs/icons/Subscribe_image.png';
import Register from '../../imgs/icons/register_image.png';




const MainDiv =styled(Div)`
  justify-content: center;
`


const Profile = () =>{

  const fs = null
  const homedir = null; 
  const setMainState = useSetRecoilState(mainState)
  const wallet=useRecoilValue(walletState)
  const contract=useRecoilValue(contractState)
  const isSignedIn=useRecoilValue(signedInState)
 

  const ACCOUNT_ID = wallet.accountId;
  const WASM_URL = "../../MintCulture_Contract/out/main.wasm";
  const FUNCTION_NAME = "init"; 
  const FUNCTION_ARGS = {"owner_id": wallet.accountId};

  const [isDeploy, setDeploy] =React.useState(false)


  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
  console.log(keyStore)
  
  const config = {
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
};


async function deployContract(accountId, wasmUrl) {
    const near = await nearAPI.connect(config);
    const account = await near.account(accountId);
    const wasmBytes = await fetch(wasmUrl).then((response) => response.arrayBuffer());
    const result = await account.functionCall(accountId, FUNCTION_NAME, FUNCTION_ARGS, 0, new Uint8Array(wasmBytes));
    console.log(result);
}

  return (
    <>

      <Div margin="30px 0 0 0" width="800px" flex_direction="column" flex_style="flexBottomCenter">
        <H1>
          Profile
        </H1>

        <Div width="95%"  height="280px" flex_style="flexSpaceBetween">
          <Img height="250px" src={MyProfile}/>
          <Div width="330px" height="160px" flex_direction="column"  flex_style="flexBottomCenter">
            <P font_size="xl" font_weight="bold">welelwe.testnet</P>
            <ShadowDiv width="100%" height="140px" margin="10px 0 0 0" background_color="grayscale4" border_radius="10px" flex_style="flexLeftCenter">
              <P font_size="s" margin="0 0 0 10px">nice!!! hello!!!</P>
            </ShadowDiv>
          </Div >
          <Img margin="8px 0 0 0" src={Register} onClick={()=>deployContract(ACCOUNT_ID, WASM_URL)}/>
        </Div>

        <Div flex_style="flexRightCenter">
          <P font_weight="bold">Subscribe</P>
          <Img margin="0 0 0 10px" width="30px" src={Subscribe}/>
        </Div>

        <Div margin="20px 0 0 0" width="100%" height="800px">
          
        </Div>
      </Div>
    
    <button onClick={()=>{setMainState("home")}}>
        back to home
      </button>
    </>
  );
}

export default Profile