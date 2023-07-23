pragma solidity ^0.8.0;

import "../src/Capsule.sol";
import "../src/MomeNFT.sol";
import "../src/TippingContract.sol";
import "forge-std/Script.sol";

contract DeployMomeNft is Script {

    address constant public apeCoin = 0x209C1808FeBf6c1aB7C65764bb61AD67d3923fcc;

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("OWNER_1_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        address capsuleAddress = address(new Capsule());
        console2.log("Capsule address: ");
        console2.log(capsuleAddress);
        address MomeNFTaddress = address(new MomeNFT(capsuleAddress));
        console2.log("MomeNFT address: ");
        console2.log(MomeNFTaddress);
        address tippingContractAddress = address(new TippingContract(MomeNFTaddress, apeCoin));
        console2.log("TippingContract address: ");
        console2.log(tippingContractAddress);
        vm.stopBroadcast();

    }
}
