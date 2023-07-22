// SPDX-License-Identifier: UNLICENSED
//erc6551 account deployer script

pragma solidity ^0.8.18;

import "../contracts/ERC6551Registry.sol";
import "../contracts/MomiNft.sol";

contract Deploy6551Account {
    address public constant goerliRegistryAddress = 0x02101dfB77FDE026414827Fdc604ddAF224F0921;
    address public constant goerliImplementationAddress = 0x2D25602551487C3f3354dD80D76D54383A243358;
    address public constant goerliTokenContractAddress = 0x00;

    function run() {
        uint256 deployerPrivateKey = vm.envUint("OWNER_1_PRIVATE_KEY");
        ERC6551Registry registry = ERC6551Registry(goerliRegistryAddress);
        vm.startBroadcast(deployerPrivateKey);
        registry.createAccount(
            address(new MomiNft()),
            5,
            address(new MomiNft()),
            3031,
            0,
            ""
        );
        vm.endBroadcast();
    }
}
