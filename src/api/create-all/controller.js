var btcbitcore = require('bitcore-lib');
const { Web3 } = require('web3');
const { setupLoader } = require('@openzeppelin/contract-loader');
var dashcore = require('@dashevo/dashcore-lib');
var dogecore = require('bitcore-lib-doge');
var litecore = require('litecore-lib');
const xrpl = require("xrpl");
const solanaWeb3 = require('@solana/web3.js');
const base58 = require('bs58');
const TronWeb = require('tronweb');


//methods for addresses

export const create = async ({ body }, res, next) =>{

    //BTC
    function btccreate() {

      var network = btcbitcore.Networks.mainnet;
      var rand_buffer = btcbitcore.crypto.Random.getRandomBuffer(32);
      var hash = btcbitcore.crypto.Hash.sha256(rand_buffer);
      var bn = btcbitcore.crypto.BN.fromBuffer(hash);
      var add = new btcbitcore.PrivateKey(bn, network).toAddress();
      var pk = new btcbitcore.PrivateKey(bn, network);
      var wif = pk.toWIF().toString();
      var address = add.toString();
      var privateKey = pk.toString();
  
      return {
        Address: address,
        PrivateKey: privateKey,
        WIF: wif,
        Network: network.name
      };
  
    }

      //ETH
  function ethcreate() {
        //mainnet
    const web3 = new Web3(process.env.INFURA_URL); // testnet INFURA_URL_TESTNET

    try {

      var new_address = web3.eth.accounts.create();
      return new_address;
      
    } catch (error) {
      console.log(error);
    }
  }

  //ETC
  function etccreate() {
    //mainnet
  const web3 = new Web3(process.env.ETC_URL); // testnet INFURA_URL_TESTNET

try {

  var new_address = web3.eth.accounts.create();
  return new_address;
  
} catch (error) {
  console.log(error);
}
}

    //BNB SMARTCHAIN
    function bnbBSCcreate() {
            //mainnet
            const web3 = new Web3(process.env.BSC_URL);
            const loader = setupLoader({ provider: web3 }).web3;
        
            const account = web3.eth.accounts.create();
            return account;
    }

      //DOGE
  function dOGEcreate() {
    var network = dogecore.Networks.mainnet;
    var rand_buffer = dogecore.crypto.Random.getRandomBuffer(32);
    var hash = dogecore.crypto.Hash.sha256(rand_buffer);
    var bn = dogecore.crypto.BN.fromBuffer(hash);
    var add = new dogecore.PrivateKey(bn, network).toAddress();
    var pk = new dogecore.PrivateKey(bn, network);
    var wif = pk.toWIF().toString();
    var address = add.toString();
    var privateKey = pk.toString();

    return {
      "address": address,
      "privateKey": privateKey,
      "WIF": wif,
      "network": network.name
    };
  }

      //LTC
      function ltccreate() {
        var network = litecore.Networks.mainnet;
        var rand_buffer = litecore.crypto.Random.getRandomBuffer(32);
        var hash = litecore.crypto.Hash.sha256(rand_buffer);
        var bn = litecore.crypto.BN.fromBuffer(hash);
        var add = new litecore.PrivateKey(bn, network).toAddress();
        var pk = new litecore.PrivateKey(bn, network);
        var wif = pk.toWIF().toString();
        var address = add.toString();
        var privateKey = pk.toString();
    
        return {
          "address": address,
          "privateKey": privateKey,
          "WIF": wif,
          "network": network.name
        };
      }

  //ripple
  function xrpcreate() {
    const wallet = xrpl.Wallet.generate();
      return {
        'address': wallet.classicAddress,
        'secret': wallet.seed
      };    
  }

      //DASH
  function dashcreate() {
    var network = dashcore.Networks.mainnet;
    var rand_buffer = dashcore.crypto.Random.getRandomBuffer(32);
    var hash = dashcore.crypto.Hash.sha256(rand_buffer);
    var bn = dashcore.crypto.BN.fromBuffer(hash);
    var add = new dashcore.PrivateKey(bn, network).toAddress();
    var pk = new dashcore.PrivateKey(bn, network);
    var wif = pk.toWIF().toString();
    var address = add.toString();
    var privateKey = pk.toString();

    return {
      "address": address,
      "privateKey": privateKey,
      "WIF": wif,
      "network": network.name
    };
  }

  //SOLANA
  function solanacreate() {
          //mainnet
      const connection = new solanaWeb3.Connection(process.env.SOL_URL); 

      var account = solanaWeb3.Keypair.generate();

      var address = account.publicKey.toBase58();

      var secret = account.secretKey;

      var privatekey = base58.encode(secret);

      return {
          "address": address,
          "privatekey": privatekey
      };
  }

    //TRON
    function troncreate() {
              //const fullNode = 'https://api.shasta.trongrid.io'; //testnet
        const fullNode = process.env.TRX_URL;
        const solidityNode = process.env.TRX_URL;
        const eventServer = process.env.TRX_URL;
        const privateKey = "8e6bf90fa653b42001824c40d7bee5ecccf00b7d2a5f076aa6174dae5c0992d9";
        const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
        return tronWeb.createAccount().then(data => {
          return {
            "address": data.address.base58,
            "privatekey": data.privateKey
          };
        }).catch((error)=>{
          console.log(error);
        });
    }


      //MATIC
  function maticcreate() {
    //mainnet
  const web3 = new Web3(process.env.POLYGON_URL); // testnet INFURA_URL_TESTNET

    try {

      var new_address = web3.eth.accounts.create();
      return new_address;
      
    } catch (error) {
      console.log(error);
    }
}

      //AVAX
      function avaxcreate() {
        //mainnet
        const web3 = new Web3(process.env.AVAX_URL); // testnet INFURA_URL_TESTNET
    
        try {
    
          var new_address = web3.eth.accounts.create();
          return new_address;
          
        } catch (error) {
          console.log(error);
        }
    }


      //calling address creation methods

      var btc = btccreate();
      var eth = ethcreate();
      var etc = etccreate();
      var bnbbsc = bnbBSCcreate();
      var doge = dOGEcreate();
      var ltc = ltccreate();
      var xrp = xrpcreate();
      var dash = dashcreate();
      var solana = solanacreate();
      var tron = await troncreate();
      var matic = maticcreate();
      var avax = avaxcreate();
      

      res.status(200).json({
        btc_address: btc.Address,
        btc_privatekey: btc.PrivateKey,
        btc_wif: btc.WIF,
        eth_address: eth.address,
        eth_privatekey: eth.privateKey,
        etc_address: etc.address,
        etc_privatekey: etc.privateKey,
        bnb_address: bnbbsc.address,
        bnb_privatekey: bnbbsc.privateKey,
        doge_address: doge.address,
        doge_privatekey: doge.privateKey,
        doge_wif: doge.WIF,
        ltc_address: ltc.address,
        ltc_privatekey: ltc.privateKey,
        ltc_wif: ltc.WIF,
        xrp_address: xrp.address,
        xrp_privatekey: xrp.secret,
        dash_address: dash.address,
        dash_privatekey: dash.privateKey,
        dash_wif: dash.WIF,
        sol_address: solana.address,
        sol_privatekey: solana.privatekey,
        tron_address: tron.address,
        tron_privatekey: tron.privatekey,
        matic_address: matic.address,
        matic_privatekey: matic.privateKey,
        avax_address: avax.address,
        avax_privatekey: avax.privateKey,
        rvmt_address: bnbbsc.address,
        rvmt_privatekey: bnbbsc.privateKey,
        usdt_address: tron.address,
        usdt_privatekey: tron.privatekey,
      });

}
