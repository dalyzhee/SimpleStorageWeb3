// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleStorage{
    uint storeData;

    function set(uint _storedata) public{
        storeData = _storedata;
    }

    function get() public view returns(uint){
        return storeData;
    }
}