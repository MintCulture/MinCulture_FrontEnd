import 'regenerator-runtime/runtime';
import React from 'react';
import styled from 'styled-components';

import {useSetRecoilState,useRecoilValue} from "recoil"
import * as nearAPI from "near-api-js";
import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';

import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";


import {walletState,contractState, accountIdState, signedInState} from "./recoil/recoilState"

// import Test from './Test'

export default function App({ isSignedIn, contractId, wallet }) {

  const setWalletState=useSetRecoilState(walletState)
  const setContractState=useSetRecoilState(contractState)
  const setSignedInState=useSetRecoilState(signedInState)

  console.log("wallet : ", wallet)

  React.useEffect(() => {
    setWalletState(wallet)
    setContractState(contractId)
    setSignedInState(isSignedIn)
    
  }
  , []);
  // const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  // const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // const [br, setBr] = React.useState([]);

//   const getBreadEvent = async() =>{



//     const bread = await fetch(`/api/bread`)
//     // const breadResult = await bread.json()

//     console.log(bread)


//     // setBr(breadResult.name)

// }

// const get =()=>{
//   getBreadEvent()
// }

  // Get blockchian state once on component load
  // React.useEffect(() => {
  //   getGreeting()
  //     .then(setValueFromBlockchain)
  //     .catch(alert)
  //     .finally(() => {
  //       setUiPleaseWait(false);
  //     });
  //   }
  // , []);

  /// If user not signed-in with wallet - show prompt
  // if (!isSignedIn) {
  //   // Sign-in flow will reload the page later
  //   return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()}/>;
  // }

  // console.log(wallet.accountId)



  // function getGreeting(){
  //   // use the wallet to query the contract's greeting
  //   return wallet.viewMethod({ method: 'get_greeting', contractId })
  // }

  console.log("HH")
 

  return (
    <>
      <Header/>
      {/* <Nav/> */}
      <Main/>
    
      {/* <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()}/>
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <h1>
          The contract says: <span className="greeting">{valueFromBlockchain}</span>
        </h1>
        <form onSubmit={changeGreeting} className="change">
          <label>Change greeting:</label>
          <div>
            <input
              autoComplete="off"
              defaultValue={valueFromBlockchain}
              id="greetingInput"
            />
            <button>
              <span>Save</span>
              <div className="loader"></div>
            </button>
          </div>
        </form>
        <EducationalText/>
      </main> */}
    </>
  );
}