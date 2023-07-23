// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-contracts/contracts/utils/Counters.sol";


//this contracts gets all the votes of the nfts minted in the last 12 hours, the ones with the most votes gets included into a 'capsule' which is a nft itself

contract Capsule is ERC721 {

    uint256 public constant CAPSULE_DURATION = 5 minutes; // should be 12 hours, but for testing purposes is 5 minutes
    uint256 public constant CAPSULE_SIZE = 12;
    uint40 lastCapsuleTime;
    uint256 public capsuleEpoch;
    uint[][] public tokensInEpoch; //epoch => Mome tokens IDs
    mapping(uint256 => uint256[]) public capsuleTokens; //capsuleId => Mome tokens IDs
    mapping(uint256 => mapping(uint256 => uint256)) public capsuleTokenVotes; //epoch => Mome tokens IDs => votes;
    uint256[] public currentEpochTop12;

    constructor() ERC721("MomeCapsule", "MOMECAPS") {
        lastCapsuleTime = uint40(block.timestamp);
        capsuleEpoch = 0;
    }

    function pushToken(uint256 tokenId) public {
        tokensInEpoch[capsuleEpoch].push(tokenId);
    }
    
    function mintCapsule() public {
        require(block.timestamp - lastCapsuleTime >= CAPSULE_DURATION, "Capsule: Capsule not ready yet");
        _safeMint(msg.sender, capsuleEpoch);
        lastCapsuleTime = uint40(block.timestamp);
        uint256[] memory currentEpochTokens = currentEpochTop12;
        for (uint i = 0; i < currentEpochTokens.length; i++) {
            uint tokenId = currentEpochTokens[i];
            capsuleTokens[capsuleEpoch].push(tokenId);
        }
        capsuleEpoch++;
    }

    function voteToken (uint256 tokenId) public {
        capsuleTokenVotes[capsuleEpoch][tokenId]++;
        checkAndSubstituteTop12(tokenId);
    }

    function checkUpkeep(bytes calldata checkData) external view returns (bool upkeepNeeded, bytes memory performData) {
        upkeepNeeded = (block.timestamp - lastCapsuleTime >= CAPSULE_DURATION);
        performData = "";
    }

    function checkAndSubstituteTop12(uint tokenId) internal {

        // this function checks if the token that is getting voted now has more votes than one of the top 12 of the current epoch, if yes it substitutes it with the one with the least votes   
        uint tokenIdVotes = capsuleTokenVotes[capsuleEpoch][tokenId];
        uint minVotes = tokenIdVotes;
        uint minVotesTokenId = tokenId;
        uint minVotesTokenIdIndex = 0;
        for (uint i = 0; i < currentEpochTop12.length; i++) {
            uint currentTokenId = currentEpochTop12[i];
            uint currentTokenIdVotes = capsuleTokenVotes[capsuleEpoch][currentTokenId];
            if (currentTokenIdVotes < minVotes) {
                minVotes = currentTokenIdVotes;
                minVotesTokenId = currentTokenId;
                minVotesTokenIdIndex = i;
            }
        }
        if (tokenIdVotes > minVotes) {
            currentEpochTop12[minVotesTokenIdIndex] = tokenId;
        }


    }

    function performUpkeep(bytes calldata performData) external {
        mintCapsule();
    }

    function getCapsuleTokens(uint256 capsuleId) public view returns (uint256[] memory) {
        return capsuleTokens[capsuleId];
    }
}
