import React from 'react';
import {useSetRecoilState} from "recoil"

import {mainState} from "../../recoil/recoilState"

// ===== import style =====
import {H1} from "../../styles/H1"
import {Img} from "../../styles/Img"
import {Div,ShadowDiv} from "../../styles/Div"
import {P} from "../../styles/P"
import styled from 'styled-components';

//===== import image =====
import Mini1 from '../../imgs/images/Group 30.png';
import Mini2 from '../../imgs/images/Group 31.png';
import Mini3 from '../../imgs/images/Group 32.png';
import Main1 from '../../imgs/images/Group 33.png';
import Main2 from '../../imgs/images/image_Square_large_2.png';
import Main3 from '../../imgs/images/image_Square_large_1.png';


const Banner = styled(Div)`
  gap:13px;
`
const Menu = styled(Div)`
  gap: 13px;
`


const Home = () =>{

  const setMainState = useSetRecoilState(mainState)

   


  return (
    <>
    <Div flex_direction="column">
      <Banner margin="20px 0 0 0">
        <Img src={Main2}/>
        <Img src={Main1} onClick={()=> setMainState("streaming")}/>
        <Img src={Main3}/>
      </Banner>
      <Div width="85%" flex_style="flexLeftCenter" margin="20px 0 0 0"> 
        <H1 >
          Trend
        </H1>
      </Div>
      
      <Menu margin="20px 0 0 0">
        <Img src={Mini1}/>
        <Img src={Mini2}/>
        <Img src={Mini3}/>
        <Img src={Mini1}/>
      </Menu>

    </Div>
   
    </>
  );
}

export default Home