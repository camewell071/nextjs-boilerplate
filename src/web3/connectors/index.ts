import { MetaMask } from '@web3-react/metamask';
import { Web3ReactHooks } from '@web3-react/core';
import { metaMask, hooks as metaMaskHooks } from '@/web3/connectors/metaMask';

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

export default connectors;
