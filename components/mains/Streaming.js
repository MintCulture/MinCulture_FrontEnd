import React from 'react';
import {useSetRecoilState,useRecoilValue} from "recoil"
import styled from 'styled-components';

import axios from 'axios';


import {useRecoilValue} from "recoil"

import {walletState, mainState, contractState} from "../../recoil/recoilState"

// ===== import style =====
import {H1} from "../../styles/H1"
import {Img} from "../../styles/Img"
import {Div,ShadowDiv} from "../../styles/Div"
import {P} from "../../styles/P"
import styled from 'styled-components';

//===== import image =====
import Streamer from '../../imgs/images/image_Circle_mid_1.png';
import Video from '../../imgs/images/image_Square_XXlarge_1.png';
import Follow from '../../imgs/icons/Follow_btn_image.png';
import Subscribe from '../../imgs/icons/Subs_btn_image.png';
import Viewer from '../../imgs/icons/Viewer_image.png';
import Emoticon from '../../imgs/icons/Emo_image.png';
import Donation from '../../imgs/icons/Donation_image.png';
import Chat from '../../imgs/icons/Chat_image.png';


const Input = styled.input`
  border : 1px solid #DCDCDC;
  border-radius : 3px;
  background-color : #101010;
  height : 27px;
  width : 90%;
  padding-left : 3px;

`


const Streaming = () =>{

  const setMainState = useSetRecoilState(mainState)
  const wallet=useRecoilValue(walletState)
  const contract=useRecoilValue(contractState)

  let now = new Date();

  console.log(now)

  function nftMint(e) {
    e.preventDefault();
    
    // use the wallet to send the greeting to the contract
    wallet.callMethod({ 
      method: 'nft_mint', 
      args: { 
        token_id: "TEST_TOKEN_ID_7",
        receiver_id: wallet.accountId,
        metadata: {
          streamer_name: "MINT_CULTURE",
          title: "MINT_CULTURE_WELCOME_TOKEN",
          serial_number: "0000000000000002",
          media: "https://user-images.githubusercontent.com/61657569/239697726-4e5b9da6-7b14-4453-8dd8-d8527c32a95d.png",
          media_hash:"",
          description: "회원가입 기념 토큰 발급",
          issued_at:"2023-05-20T15:10:11Z"
      },
      contract,
     }})
  }

  // const createNft = async () => {
  //   try {
  //     const response = await axios.post('/api/nfts', {
  //         owner: wallet.accountId,
  //         subscriptionMonth : 0,
  //         totalDonationValue:0.0,
  //         serialNum:00001,
  //         level:1,
  //         nextToLevel :3,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const createNft = async () => {
  //   try {
  //     const response = await axios.get('localhost:7070/api/nfts/all');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  return (
    <>
   

   
        <Div width="1000px" height="800px" background_color="pink" flex_direction="column">
          <Img width="100%" src={Video}/>
          <Div width="100%" height="180px" flex_style="flexSpaceBetween">
            <Div>
              <Img  height="140px" src={Streamer}/>
              <Div width="400px" height="110px" flex_direction="column" flex_style="flexBottomCenter" margin="0 0 0 5px">
                <H1 font_size="xl">molly.testnet</H1>
                <P font_size="s" >Let's play HashRush</P>
                <P font_size="xs" color="grayscale2">HashRush | 12K watching</P>
              </Div>
            </Div>
          
            <Div  background_color="pink" flex_direction="column" flex_style="flexTopCenter">
              <Div>
                <Img src={Follow}/>
                <Img margin="0 0 0 5px" src={Subscribe} onClick={nftMint}/>
              </Div>
              <Div>
                <Img height="13px" src={Viewer}/>
                <P color="red" font_size="xs">
                  12,000
                </P>
              </Div>
              <P color="grayscale2" font_size="xxs">4:20:16</P>
            </Div>
          </Div>
        </Div>

        <Div width="250px" height="720px" flex_direction="column" margin="0 0 15px 10px"> 
          <Div width="100%" height="625px" background_color="grayscale4"border_radius="10px">


          </Div>
          <Div width="100%" height="90px" background_color="grayscale4" border_radius="10px" margin="5px 0 0 0" flex_direction="column">
              <Input placeholder="Send a message"/>
              <Div margin="5px 0 0 0" width="90%" flex_style="flexSpaceBetween">
                <Img height="24px" src={Emoticon}/>
                <Div >
                  <Img  height="24px" src={Donation}/>
                  <Img  margin="0 0 0 3px" height="24px" src={Chat}/>
                </Div>
              </Div>
          </Div>
        </Div>
    <div>
    </div> 
     
    </>
  );
}

export default Streaming