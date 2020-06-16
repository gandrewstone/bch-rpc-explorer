var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
  {
    type:"native",
    name:"NXC",
    multiplier:1,
    default:true,
    values:["", "nxc", "NXC"],
    decimalPlaces:8
  },
  {
    type:"native",
    name:"mNXC",
    multiplier:1000,
    values:["mnxc"],
    decimalPlaces:5
  },
  {
    type:"native",
    name:"bits",
    multiplier:1000000,
    values:["bits"],
    decimalPlaces:2
  },
  {
    type:"native",
    name:"sat",
    multiplier:100000000,
    values:["sat", "satoshi"],
    decimalPlaces:0
  },
  {
    type:"exchanged",
    name:"USD",
    multiplier:"usd",
    values:["usd"],
    decimalPlaces:2,
    symbol:"$"
  },
  {
    type:"exchanged",
    name:"EUR",
    multiplier:"eur",
    values:["eur"],
    decimalPlaces:2,
    symbol:"€"
  },
];

module.exports = {
  name:"NextChain",
  ticker:"NXC",
  logoUrl:"/img/logo/bch.svg",
  siteTitle:"Bitcoin Cash NextChain",
  siteDescriptionHtml:"<b>NXC Explorer</b> is <a href='https://github.com/sickpig/bch-rpc-explorer). If you run your own [Bitcoin Cash Full Node](https://www.bitcoincash.org/nodes.html), **BCH Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/sickpig/bch-rpc-explorer) for a list of features and instructions for running.",
  nodeTitle:"NextChain Full Node",
  nodeUrl:"http://www.nextchain.cash",
  demoSiteUrl: "http://explorer.nextchain.cash",
  miningPoolsConfigUrls:[
    "https://raw.githubusercontent.com/btccom/Blockchain-Known-Pools/master/pools.json",
    "https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json"
  ],
  maxBlockSize: 32000000,
  difficultyAdjustmentBlockOffset: 1008,
  difficultyAdjustmentBlockCount: 4,

  maxSupplyByNetwork: {
		"main": new Decimal(20999817.31308491), // ref: https://bitcoin.stackexchange.com/a/38998
		"test": new Decimal(21000000),
		"regtest": new Decimal(21000000)
	},
  targetBlockTimeSeconds: 60,
  targetBlockTimeMinutes: 1,
  currencyUnits:currencyUnits,
  currencyUnitsByName:{"NXC":currencyUnits[0], "mNXC":currencyUnits[1], "bits":currencyUnits[2], "sat":currencyUnits[3]},
  baseCurrencyUnit:currencyUnits[3],
  defaultCurrencyUnit:currencyUnits[0],
  feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
    
  genesisBlockHashesByNetwork:{
    "main":    "4db8c91181548fb427e1e8c6faa822ed4586263f0698b1357a8f7ee78004a924",
    "test":    "4db8c91181548fb427e1e8c6faa822ed4586263f0698b1357a8f7ee78004a924",
    "regtest": "4db8c91181548fb427e1e8c6faa822ed4586263f0698b1357a8f7ee78004a924"
  },
  genesisCoinbaseTransactionIdsByNetwork: {
    "main":    "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    "test":    "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    "regtest": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
  },
  genesisCoinbaseTransactionsByNetwork:{
    "main": {
      "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
      "txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "size": 204,
      "vsize": 204,
      "version": 1,
      "confirmations":618235,
      "vin": [
        {
          "coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 50,
          "n": 0,
          "scriptPubKey": {
            "asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
            "hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
            "reqSigs": 1,
            "type": "pubkey",
            "addresses": [
              "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
            ]
          }
        }
      ],
      "blockhash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
      "time": 1230988505,
      "blocktime": 1230988505
    },
    "test": {
      "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
      "txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "version": 1,
      "size": 204,
      "vsize": 204,
      "weight": 816,
      "locktime": 0,
      "vin": [
        {
          "coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 50.00000000,
          "n": 0,
          "scriptPubKey": {
            "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
            "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
            "reqSigs": 1,
            "type": "pubkey",
            "addresses": [
              "mpXwg4jMtRhuSpVq4xS3HFHmCmWp9NyGKt"
            ]
          }
        }
      ],
      "blockhash": "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
      "time": 1296688602,
      "blocktime": 1296688602
    },
    "regtest": {
      "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
      "txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      "version": 1,
      "size": 204,
      "vsize": 204,
      "weight": 816,
      "locktime": 0,
      "vin": [
        {
          "coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 50.00000000,
          "n": 0,
          "scriptPubKey": {
            "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
            "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
            "type": "pubkey"
          }
        }
      ],
      "blockhash": "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
      "time": 1296688602,
      "blocktime": 1296688602
    }
  },
  genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
  historicalData: [
    {
      type: "blockheight",
      date: "2009-01-03",
      chain: "main",
      blockHeight: 0,
      blockHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
      summary: "The Bitcoin Cash Genesis Block.",
      alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. This block was mined by Bitcoin's creator Satoshi Nakamoto. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
      referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
    },

    // testnet
    {
      type: "blockheight",
      date: "2020-05-06",
      chain: "nxc",
      blockHeight: 0,
      blockHash: "9623194f62f31f7a7065467c38e83cf060a2b866190204f3dd16f6587d8d9374",
      summary: "The NextChain Genesis Block.",
      alertBodyHtml: "This is the first block in the NextChain blockchain, known as the 'Genesis Block'. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
      referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
    },
    {
      type: "tx",
      date: "2011-02-02",
      chain: "test",
      txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      summary: "The coinbase transaction of the Genesis Block.",
      alertBodyHtml: "This transaction doesn't really exist! This is the coinbase transaction of the <a href='/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>Bitcoin Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers.",
      referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
    },


    // regtest
    {
      type: "blockheight",
      date: "2011-02-02",
      chain: "regtest",
      blockHeight: 0,
      blockHash: "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
      summary: "The Bitcoin (regtest) Genesis Block.",
      alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
      referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
    },
    {
      type: "tx",
      date: "2011-02-02",
      chain: "regtest",
      txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      summary: "The coinbase transaction of the Genesis Block.",
      alertBodyHtml: "This transaction doesn't really exist! This is the coinbase transaction of the <a href='/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>Bitcoin Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers.",
      referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
    },
  ],
  exchangeRateData:{
    // see https://www.kraken.com/features/api#get-ticker-info for doc on that API
    // endoint. What we need in "jq" syntax is:
    // jq ."result"."BCHUSD"."c"[0] and jq ."result"."BCHEUR"."c"[0]
    // the above will return back the last trade closed at the time the url
    // has been fetched
    jsonUrl:"https://api.kraken.com/0/public/Ticker?pair=BCHUSD,BCHEUR",
    responseBodySelectorFunction:function(responseBody) {
      //console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

      var exchangedCurrencies = ["BCHUSD", "BCHEUR"];

      if (responseBody.result) {
        var exchangeRates = {};

        for (var i = 0; i < exchangedCurrencies.length; i++) {
          if (responseBody.result[exchangedCurrencies[i]]) {
            var key = exchangedCurrencies[i].replace("BCH", "");
            exchangeRates[key.toLowerCase()] = responseBody.result[exchangedCurrencies[i]]["c"][0];
          }
        }

        return exchangeRates;
      }

      return null;
    }
  },

  blockRewardFunction:function(blockHeight, chain) {
    var eras = [ new Decimal8(50) ];
    for (var i = 1; i < 34; i++) {
      var previous = eras[i - 1];
      eras.push(new Decimal8(previous).dividedBy(2));
    }

    var halvingBlockInterval = (chain == "regtest" ? 150 : 210000);
    var index = Math.floor(blockHeight / halvingBlockInterval);

    return eras[index];
  }
};
