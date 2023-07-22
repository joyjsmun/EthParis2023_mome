pragma solidity ^0.8.0;

import "../contracts/MomeNFT.sol";

contract DeployMomeNft {

    function run() {
        uint256 deployerPrivateKey = vm.envUint("OWNER_1_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        address MomeNFT = new MomeNFT();
        vm.endBroadcast();
    }
}