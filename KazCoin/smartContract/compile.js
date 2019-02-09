const path = require("path");
const solc = require("solc");
const fileSystem = require("fs-extra");

//Preparing for bin folder
const exportPath = path.resolve(__dirname, "bin");
fileSystem.removeSync(exportPath);

//Get contract path
const coinContract = path.resolve(__dirname, "contracts", "KazCoin.sol");
const saleContract = path.resolve(__dirname, "contracts", "Crowdsale.sol");

//Read the contract from voting path
const coinSource = fileSystem.readFileSync(coinContract, "utf8");
const saleSource = fileSystem.readFileSync(saleContract, "utf8");
//const output = solc.compile(contractSource,1);

var input = {
	language: 'Solidity',
	sources: {
		'KazCoin.sol': {
			content: coinSource
        },
        'Crowdsale.sol': {
            content: saleSource
        }
	},
	settings: {
		outputSelection: {
			'*': {
				'*': [ '*' ]
			}
		}
	}
}

try{
    const output = JSON.parse(solc.compile(JSON.stringify(input)),1);

    fileSystem.outputJSONSync(
        path.resolve(exportPath,"MyCoin.json"),
        output
    );

/*     for (let contract in output.contracts["MaltaVoting.sol"]) {
        fileSystem.outputJSONSync(
          path.resolve(exportPath, "MaltaVotingABI.json"),
          output.contracts["MaltaVoting.sol"][contract].abi
        );
    
        fileSystem.outputJSONSync(
          path.resolve(exportPath, "MaltaVotingBytecode.json"),
          output.contracts["MaltaVoting.sol"][contract].evm.bytecode.object
        );
      }  */
    
    for (let solFile in output.contracts){
        for (let contract in output.contracts[solFile]){
            fileSystem.outputJSONSync(
                path.resolve(exportPath,contract.concat("ABI",".json")),
                output.contracts[solFile][contract].abi
              );

            fileSystem.outputJSONSync(
                path.resolve(exportPath,contract.concat("ByteCode",".json")),
                output.contracts[solFile][contract].evm.bytecode.object
              );
        }
    }

    /* 
    for (let contract in output.contracts){
        var contractName = contract;
        var fileName = contractName.substring(0,contractName.length-4).concat('.json');
        console.log(output.contracts[contract]);
        
        fileSystem.outputJSONSync(
            path.resolve(exportPath,fileName),
            output.contracts[contract].interface
        );
       
        fileSystem.outputJSONSync(
            path.resolve(exportPath,fileName),
            output.contracts[contract].bytecode
        ); 
    }  
    */
}catch(error){
    console.log(error);
}




