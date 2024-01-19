
```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
This repo contains a contract that implements tipping functionality.

Install dependencies with npm install.

Set up by creating a .env file, and filling out these variables:

GOERLI_URL="your Alchemy RPC URL"
GOERLI_API_KEY="your Alchemy API key"
PRIVATE_KEY="your wallet private key"
You can get an Alchemy RPC URL for free here.

!!! Be very careful with exporting your private key !!!
You can get your Private Key from MetaMask like this. If you have any questions or concerns about this, please find someone you trust to sanity check you!

!!! Be very careful with exporting your private key !!!
Deploy your contract with:

``npx hardhat run scripts/deploy.js``

Run an example buy coffee flow locally with:

``npx hardhat run scripts/buy-coffee.js``
Once you have a contract deployed to Goerli testnet, grab the contract address and update the contractAddress variable in scripts/withdraw.js, then:

``npx hardhat run scripts/withdraw.js``
will allow you to withdraw any tips stored on the contract.

set up an alchemy account on https://dashboard.alchemy.com/ and create a new project on ethereum, goerli testnet. click on view keys and copy your GOERLI_URL and GOERLI_API_KEY and put in on a .env file. 
like this
```
GOERLI_URL=https://eth-goerli.alchemyapi.io/v2/<your api key>
GOERLI_API_KEY=<your api key>
PRIVATE_KEY=<your metamask api key>
```

create a .env file with command ``touch .env``

to test your app using a frontend, fork this frontend on replit
https://replit.com/@izikdepth/BuyMeACoffee-Solidity-DeFi-Tipping-app

and make the neccesary edits such as contract address in pages/index.jsx and edit out my name to put yours. # BUY-ME-A-COFFEE
