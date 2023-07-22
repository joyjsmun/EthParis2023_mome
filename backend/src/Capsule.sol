// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-contracts/contracts/utils/Counters.sol";

//this contracts gets all the votes of the nfts minted in the last 12 hours, the ones with the most votes gets included into a 'capsule' which is a nft itself

contract Capsule is ERC721 {



    constructor() ERC721("MomeCapsule", "MOMECAPS") {}

    




}
