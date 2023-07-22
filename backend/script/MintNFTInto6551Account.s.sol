pragma solidity ^0.8.0;

import "../src/MomeNFT.sol";
import "forge-std/Script.sol";

contract MintNFTInto6551Account is Script {
    address public constant account6551 = 0xE255e2404f50a2878C6587271698e81fd30e9D13;
    address public constant momeNFT = 0x7c1DC50D061b87D4E94Cb09999729E0b57E1Ce34;

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("OWNER_1_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        MomeNFT(momeNFT).safeMint(address(1), '');
        MomeNFT(momeNFT).safeMint(address(1), '');
        MomeNFT(momeNFT).safeMint(address(1), '');
        vm.stopBroadcast();
    }
}
