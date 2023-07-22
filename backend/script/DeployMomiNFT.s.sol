pragma solidity ^0.8.0;

import "../contracts/MomiNFT.sol";

contract DeployMomiNft {

    function run() {
        uint256 deployerPrivateKey = vm.envUint("OWNER_1_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        address MomiNFT = new MomiNFT();
        vm.endBroadcast();
    }
}