// SPDX-License-Identifier: UNLICENSED
//erc6551 account deployer script

pragma solidity ^0.8.18;

import "../contracts/ERC6551Account.sol";

contract Deploy6551Account {
    function run() {
        uint256 deployerPrivateKey = vm.envUint("OWNER_1_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        ERC6551Account account = new ERC6551Account();
        vm.endBroadcast();
    }
}
