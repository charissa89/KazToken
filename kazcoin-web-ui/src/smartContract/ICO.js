import web3 from "../web3";
import Coin from "./KazCoinABI.json";

let contractInstance = null;
try{
    contractInstance = new web3.eth.Contract(Coin,"0x4d4480a993712f6874d32c1901e255de8410b180");
}
catch(error){
    contractInstance = null;
    console.log(error);
} 

console.log(contractInstance);

/* var result = {
    "totalSupply": contractInstance.totalSupply(),
    "symbol": contractInstance.symbol(),
    "name": contractInstance.name(),
  };
  console.log(JSON.stringify(result)); */

export default contractInstance;