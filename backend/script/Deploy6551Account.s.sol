// SPDX-License-Identifier: UNLICENSED
//erc6551 account deployer script

pragma solidity ^0.8.18;

import "../src/6551Registry.sol";
import "../src/MomeNft.sol";
import "forge-std/Script.sol";

contract Deploy6551Account is Script {
    address public constant goerliRegistryAddress = 0x02101dfB77FDE026414827Fdc604ddAF224F0921;
    address public constant goerliImplementationAddress = 0x2D25602551487C3f3354dD80D76D54383A243358;
    address public constant goerliMomeContractAddress = 0x77Dda100716148ab1F4456b6fa596663B14cb0A8;

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("OWNER_1_PRIVATE_KEY");
        ERC6551Registry registry = ERC6551Registry(goerliRegistryAddress);
        vm.startBroadcast(deployerPrivateKey);
        registry.createAccount(goerliImplementationAddress, 5, goerliMomeContractAddress, 3031, 0, "");
        vm.stopBroadcast();
    }
}
