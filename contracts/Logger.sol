pragma solidity >=0.5.0 <0.6.0;

contract Logger {
  address public owner;
  uint public savedNumber;

	event stored(address from, uint someNumber);

  constructor() public {
    owner = msg.sender;
    savedNumber = 0;
  }

  modifier onlyOwner() {
    if (msg.sender == owner) _;
  }

  function store(uint someNumber) public onlyOwner {
		savedNumber = someNumber;
    emit stored(msg.sender, someNumber);
  }
}