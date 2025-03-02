// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/extensions/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";

contract OriginERC721 is Context, AccessControlEnumerable, ERC721, ERC721Burnable {
    using SafeCast for uint256;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    
    uint256 private _tokenIdTracker;
    string private _baseTokenURI = "";

    event Minted(address toAddress, uint256 tokenId);
    event MultipleMinted(address toAddress, uint256 from, uint256 to);

    modifier onlyAdmin() {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, _msgSender()),
            "must have admin role"
        );
        _;
    }

    modifier onlyMinter() {
        require(hasRole(MINTER_ROLE, _msgSender()), "must have minter role");
        _;
    }

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(MINTER_ROLE, _msgSender());
        _tokenIdTracker = 1;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseTokenURI) external onlyAdmin {
        _baseTokenURI = baseTokenURI;
    }

    function setupMinterRole(address account, bool _enable) external onlyAdmin {
        require(account != address(0), "account must not be zero address");
        if (_enable) {
            _grantRole(MINTER_ROLE, account);
        } else {
            _revokeRole(MINTER_ROLE, account);
        }
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        string memory currentBaseUri = _baseURI();
        return
            bytes(currentBaseUri).length > 0
                ? string(abi.encodePacked(currentBaseUri, Strings.toString(tokenId)))
                : "";
    }

    function mint(address toAddress) external onlyMinter returns (uint256) {
        require(toAddress != address(0), "cannot mint to zero address");

        uint256 newTokenId = _tokenIdTracker;
        _mint(toAddress, newTokenId);

        emit Minted(toAddress, newTokenId);

        unchecked {
            _tokenIdTracker++;
        }

        return newTokenId;
    }

    function mintBatch(address toAddress, uint256 amount) external onlyMinter returns (uint256) {
        require(toAddress != address(0), "cannot mint to zero address");
        require(amount > 0, "amount must be greater than zero");

        uint256 from = _tokenIdTracker;
        for (uint256 i = 0; i < amount; i++) {
            _mint(toAddress, _tokenIdTracker);
            unchecked {
                _tokenIdTracker++;
            }
        }

        emit MultipleMinted(toAddress, from, _tokenIdTracker - 1);
        return _tokenIdTracker - 1;
    }

    function _increaseBalance(address account, uint128 value) internal virtual override {
        super._increaseBalance(account, value);
    }

    function _update(address to, uint256 tokenId, address auth) internal virtual override returns (address) {
        return super._update(to, tokenId, auth);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(AccessControlEnumerable, ERC721)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
