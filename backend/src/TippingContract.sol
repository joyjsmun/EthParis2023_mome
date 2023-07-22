pragma solidity ^0.8.18;

import "openzeppelin-solidity/contracts/token/ERC721/IERC721.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract TippingContract {

struct token {
        uint40 timestamp;
        address owner;
}

    IERC721 public momeNFT;
    IERC20 public apeCoin;
    mapping(uint256 => uint256) public tipAmounts; // tokenId => amount
    mapping(uint256 => token) public tokens; // tokenId => token
    

    constructor(address _momeNFT, address _apeCoin) {
        momeNFT = IERC721(_momeNFT);
        apeCoin = IERC20(_apeCoin);
    }

    function tip(uint256 tokenId, uint amount) public {
        tipAmounts[tokenId] += amount;
        apeCoin.transferFrom(msg.sender, address(this), amount);
        momeNFT.transferFrom(address(this), msg.sender, tokenId);
    }

    function registerToken(uint256 tokenId) public {
        
    }

    function withdraw(uint256 tokenId) public {
        uint256 amount = tipAmounts[tokenId];
        tipAmounts[tokenId] = 0;
        apeCoin.transferFrom(address(this), msg.sender, amount);
        momeNFT.transferFrom(msg.sender, address(this), tokenId);
    }
}

