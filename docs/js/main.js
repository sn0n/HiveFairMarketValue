"use strict";
let blokz = "";


function triggered() {
    let data = JSON.parse(document.getElementById("blokz").textContent);
    document.getElementById("blokz").innerHTML = ""
    document.getElementById("blokz").innerHTML += "bitcoin: " + JSON.stringify(data['bitcoin'].usd) + "<br />"
    document.getElementById("blokz").innerHTML += "litecoin: " + JSON.stringify(data['litecoin'].usd) + "<br />"
    document.getElementById("blokz").innerHTML += "hive: " + JSON.stringify(data['hive'].usd) + "<br />"
    document.getElementById("blokz").innerHTML += "<hr />";
    let rate = JSON.stringify(data['litecoin'].usd)/JSON.stringify(data['hive'].usd)
    let buyrate = rate-(rate/100)
    document.getElementById("blokz").innerHTML += "<h2>SWAP.LTC</h2>Actual rate : " + rate.toFixed(4) +  "<br />"
    document.getElementById("blokz").innerHTML += "buy less than : " + buyrate.toFixed(4) + " | (-1%)<br />"
    let sellrate = rate+(rate/100)
    document.getElementById("blokz").innerHTML += "sell more than : " + sellrate.toFixed(4) + " | (+1%)"
    
    let btcrate = JSON.stringify(data['bitcoin'].usd)/JSON.stringify(data['hive'].usd)
    let btcbuyrate = btcrate-(btcrate/100)
    document.getElementById("blokz").innerHTML += "<h2>SWAP.BTC</h2>Actual rate : " + btcrate.toFixed(4) +  "<br />"
    document.getElementById("blokz").innerHTML += "buy less than : " + btcbuyrate.toFixed(4) + "| (-1%)<br />"
    let btcsellrate = btcrate+(btcrate/100)
    document.getElementById("blokz").innerHTML += "sell moar than : " + btcsellrate.toFixed(4) + "| (+1%) <br />"


}

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Chive&vs_currencies=usd", {
  headers: {
    Accept: "application/json"
  }
}).then(response => response.json())
  .then(data => document.getElementById("blokz").innerHTML += JSON.stringify(data))
  .then(setTimeout(() => triggered(), 400))


