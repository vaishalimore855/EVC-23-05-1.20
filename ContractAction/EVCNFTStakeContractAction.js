import Web3 from "web3";
import { abiEVCNFTStake } from "./ABI/EVCNFTStake"

// RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-2-s2.binance.org:8545";
var ContractaddressEVCNftStake = "0xaaaf01e7D3e5658c4d6dE391993452cbdFEa6D7c";
const abiEVCNftStake = abiEVCNFTStake;

// HttpProvider
var web3 = new Web3(new Web3.providers.HttpProvider(RPCUrl));

// CurrentProvider
const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
};



// NFT Stake

export const setNFTStake = async (_id) => {
    console.log("_idNFTStake", _id);
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 97) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(97) }],
            });
        }
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const id = _id;
        console.log("idNFTStake", id);
        const nftStake = await contracts.methods.stake(id).send({ from: account });
        console.log("nftStake", nftStake);
    }
};

export const setNFTUnStake = async (_id) => {
    console.log("_idNFTUnStake", _id);
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 97) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(97) }],
            });
        }
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const id = _id;
        console.log("idNFTUnStake", id);
        const nftUnStake = await contracts.methods.withdraw(id).send({ from: account });
        console.log("nftUnStake", nftUnStake);
    }
};

export const setClaimNFTReward = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 97) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(97) }],
            });
        }
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const claimNFTReward = await contracts.methods.claim().send({ from: account });
        console.log("claimNFTReward", claimNFTReward);
    }
};

export const getStakeBalancesNFTs = async () => {
    console.log("getStakeBalancesNFTs");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getStakeBalancesNFTs_account", account);
    const stakeBalancesNFTs = await contracts.methods.stakeBalances(account).call();
    console.log("stakeBalancesNFTs", stakeBalancesNFTs);
    return stakeBalancesNFTs;
};

export const getStakeOfOwnerNFTIDs = async () => {
    console.log("getStakeOfOwnerNFTIDs");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getStakeOfOwnerNFTIDs_account", account);
    const stakeOfOwnerNFTIDs = await contracts.methods.stakeOfOwner(account).call();
    console.log("stakeOfOwnerNFTIDs", stakeOfOwnerNFTIDs);
    return stakeOfOwnerNFTIDs;
};

export const getTotalClaimableNFTReward = async () => {
    console.log("getTotalClaimableNFTReward");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getTotalClaimableNFTReward_account", account);
    const totalClaimableReward = await contracts.methods.getTotalClaimable(account).call();
    let totalClaimableNFTreward = await web3.utils.fromWei(totalClaimableReward, "ether");
    let totalClaimableNFTReward = parseFloat(totalClaimableNFTreward).toFixed(4);
    console.log("totalClaimableNFTReward", totalClaimableNFTReward);
    return totalClaimableNFTReward;
};