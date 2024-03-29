// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract AucEngine {
    address public owner;
    uint256 constant DURATION = 2 days;
    uint256 constant FEE = 10; //10%

    struct Auction {
        address payable seller;
        uint256 startingPrice;
        uint256 finalPrice;
        uint256 startAt;
        uint256 endsAt;
        uint256 discountRate;
        string item;
        bool stopped;
    }

    Auction[] public auctions;

    event AuctionCreated(
        uint256 index,
        string itemName,
        uint256 startingPrice,
        uint256 dutation
    );

    event AuctionEnded(uint256 index, uint256 Finalprice, address winner);

    constructor() {
        owner = msg.sender;
    }

    function createAuction(
        uint256 _startingPrice,
        uint256 _discountRate,
        string calldata _item,
        uint256 _duration
    ) external {
        uint256 duration = _duration == 0 ? DURATION : _duration;

        require(
            _startingPrice >= _discountRate * duration,
            "incorrect starting price"
        );

        Auction memory newAuction = Auction({
            seller: payable(msg.sender),
            startingPrice: _startingPrice,
            finalPrice: 0,
            discountRate: _discountRate,
            startAt: block.timestamp,
            endsAt: block.timestamp + duration,
            item: _item,
            stopped: false
        });

        auctions.push(newAuction);

        emit AuctionCreated(auctions.length, _item, _startingPrice, duration);
    }

    function getPriceFor(uint256 index) public view returns (uint256) {
        Auction memory cAuction = auctions[index];
        require(!cAuction.stopped, "stopped!");
        uint256 elapsed = block.timestamp - cAuction.startAt;
        uint256 discount = elapsed * cAuction.discountRate;
        return cAuction.startingPrice - discount;
    }

    function stop(uint256 index) external {
        Auction storage cAuction = auctions[index];
        cAuction.stopped = true;
    }

    function buy(uint256 index) external payable {
        Auction storage cAuction = auctions[index];
        require(!cAuction.stopped, "stopped!");
        require(block.timestamp < cAuction.endsAt, "ended!");
        uint256 cPrice = getPriceFor(index);
        require(msg.value >= cPrice, "not enough funds!");
        cAuction.stopped = true;
        cAuction.finalPrice = cPrice;
        uint256 refund = msg.value - cPrice;
        if (refund > 0) {
            payable(msg.sender).transfer(refund);
        }
        cAuction.seller.transfer(cPrice - ((cPrice * FEE) / 100));
        emit AuctionEnded(index, cPrice, msg.sender);
    }
}
