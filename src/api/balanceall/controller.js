
const axios = require("axios");

export const balance = async ({ body }, res, next) =>{

const urls = [
  'http://0.0.0.0:9000/bitcoin/balance/' + body.btcaddress,
  'http://0.0.0.0:9000/ethereum/balance/' + body.ethaddress,
  'http://0.0.0.0:9000/ethereum-classic/balance/' + body.etcaddress,
  'http://0.0.0.0:9000/binance/balance/' + body.bnbaddress,
  'http://0.0.0.0:9000/dogecoin/balance/' + body.dogeaddress,
  'http://0.0.0.0:9000/litecoin/balance/' + body.ltcaddress,
  'http://0.0.0.0:9000/ripple/balance/' + body.xrpaddress,
  'http://0.0.0.0:9000/dash/balance/' + body.dashaddress,
  'http://0.0.0.0:9000/solana/balance/' + body.soladdress,
  'http://0.0.0.0:9000/tron/balance/' + body.tronaddress,
  'http://0.0.0.0:9000/matic/balance/' + body.maticaddress,
  'http://0.0.0.0:9000/avalanche/balance/' + body.avaxaddress,
  'http://0.0.0.0:9000/rvmt/balance/' + body.rvmtaddress,
  'http://0.0.0.0:9000/usdt/balance/' + body.usdtaddress,
  'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ETC,BNB,DOGE,LTC,XRP,DASH,SOL,TRX,MATIC,AVAX&tsyms=USD'

];



const requests = urls.map((url) => axios.get(url));

axios.all(requests)
.then((responses) => {
  let data = [];
  responses.forEach((resp) => {
    data.push(resp.data);
  });
  //console.log(data);

var btcbalance = data[0];
var ethbalance = data[1];
var etcbalance = data[2];
var bnbbalance = data[3];
var dogebalance = data[4];
var ltcbalance = data[5];
var xrpbalance = data[6];
var dashbalance = data[7];
var solbalance = data[8];
var tronbalance = data[9];
var maticbalance = data[10];
var avaxbalance = data[11];
var rvmtbalance = data[12];
var usdtbalance = data[13];
var pricedata = data[14];
const price = {
  "btcprice": pricedata.BTC.USD,
  "ethprice": pricedata.ETH.USD,
  "etcprice": pricedata.ETC.USD,
  "bnbprice": pricedata.BNB.USD,
  "dogeprice": pricedata.DOGE.USD,
  "ltcprice": pricedata.LTC.USD,
  "xrpprice": pricedata.XRP.USD,
  "dashprice": pricedata.DASH.USD,
  "solprice": pricedata.SOL.USD,
  "trxprice": pricedata.TRX.USD,
  "maticprice": pricedata.MATIC.USD,
  "avaxprice": pricedata.AVAX.USD,
};

  res.status(200).json({
  "btcbalance": btcbalance.balance,
  "btcusd": (btcbalance.balance * price.btcprice).toFixed(2),
  "ethbalance": ethbalance.balance,
  "ethusd": (ethbalance.balance * price.ethprice).toFixed(2),
  "etcbalance": etcbalance.balance,
  "etcusd": (etcbalance.balance * price.etcprice).toFixed(2),
  "bnbbalance": bnbbalance.balance,
  "bnbusd": (bnbbalance.balance * price.bnbprice).toFixed(2),
  "dogebalance": dogebalance.balance,
  "dogeusd": (dogebalance.balance * price.dogeprice).toFixed(2),
  "ltcbalance": ltcbalance.balance,
  "ltcusd": (ltcbalance.balance * price.ltcprice).toFixed(2),
  "xrpbalance": xrpbalance.balance,
  "xrpusd": (xrpbalance.balance * price.xrpprice).toFixed(2),
  "dashbalance": dashbalance.balance,
  "dashusd": (dashbalance.balance * price.dashprice).toFixed(2),
  "solbalance": solbalance.balance,
  "solusd": (solbalance.balance * price.solprice).toFixed(2),
  "tronbalance": tronbalance.balance,
  "tronusd": (tronbalance.balance * price.trxprice).toFixed(2),
  "maticbalance": maticbalance.balance,
  "maticusd": (maticbalance.balance * price.maticprice).toFixed(2),
  "avaxbalance": avaxbalance.balance,
  "avaxusd": (avaxbalance.balance * price.avaxprice).toFixed(2),
  "rvmtbalance": rvmtbalance.balance,
  "usdtbalance": usdtbalance.balance,
});
})
.catch((err)=>{
  console.log(err);
});


}

