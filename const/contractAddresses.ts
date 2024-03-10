/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai } from "@thirdweb-dev/chains";
export const NETWORK = Cronos;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xE666c5B5964aA789524b03392f02904319adf2da";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x2111ac0D4178274F8f859401a16dB9fBB524986E";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://cronoscan.com/";
