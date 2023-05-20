// React
import { createRoot } from 'react-dom/client';
import App from './App';

import {RecoilRoot} from 'recoil';

// NEAR
import { Wallet } from './near-wallet';

import GlobalStyle from './styles/GlobalStyle'

const CONTRACT_ADDRESS = "dev5.mer98.testnet"

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS })
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript


// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp()

  root.render(
    <RecoilRoot>
      <GlobalStyle/>
      <App isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} />
    </RecoilRoot>
  );
}