"use strict";
let blokz = "";


function triggered() {
    let data = JSON.parse(localStorage.getItem('status'));
    /*
    document.getElementById("blokz").innerHTML = "Current Rates : <br />"
    document.getElementById("blokz").innerHTML += "bitcoin: $" + data.bitcoin.usd.toFixed(2) + "<br />"
    document.getElementById("blokz").innerHTML += "litecoin: $" + data.litecoin.usd.toFixed(2) + "<br />"
    document.getElementById("blokz").innerHTML += "hive: $" + data.hive.usd.toFixed(2) + "<br />"
    document.getElementById("blokz").innerHTML += "hive dollar: $" + data.hive_dollar.usd.toFixed(2) + "<br />"
    document.getElementById("blokz").innerHTML += "<hr />";
    */
    document.getElementById("blokz").innerHTML += "<h1>hive-engine</h1>"
    let rate = data.litecoin.usd/data.hive.usd;
    let buyrate = rate-(rate/100);

    document.getElementById("blokz").innerHTML += "<h3>SWAP.LTC</h3>Actual rate : " + rate.toFixed(4) +  "<br />"
    document.getElementById("blokz").innerHTML += "buy less than : " + buyrate.toFixed(4) + " | (-1%)<br />"
    let sellrate = rate+(rate/100)
    document.getElementById("blokz").innerHTML += "sell more than : " + sellrate.toFixed(4) + " | (+1%)"
    
    let btcrate = data.bitcoin.usd/data.hive.usd;
    let btcbuyrate = btcrate-(btcrate/100)
    document.getElementById("blokz").innerHTML += "<h3>SWAP.BTC</h3>Actual rate : " + btcrate.toFixed(4) +  "<br />"
    document.getElementById("blokz").innerHTML += "buy less than : " + btcbuyrate.toFixed(4) + " | (-1%)<br />"
    let btcsellrate = btcrate+(btcrate/100)
    document.getElementById("blokz").innerHTML += "sell moar than : " + btcsellrate.toFixed(4) + " | (+1%) <br />"



    document.getElementById("blokz").innerHTML += "<hr /><h1>internal market</h1>"
    let imrate = JSON.stringify(data['hive'].usd)/JSON.stringify(data['hive_dollar'].usd)
    let imbuyrate = imrate-(imrate/100);
    document.getElementById("blokz").innerHTML += "<h3>hive in hbd</h3>Actual rate : " + imrate.toFixed(4) +  "<br />"
    document.getElementById("blokz").innerHTML += "buy less than : " + imbuyrate.toFixed(4) + " | (-1%)<br />"
    let imsellrate = imrate+(imrate/100)
    document.getElementById("blokz").innerHTML += "sell more than : " + imsellrate.toFixed(4) + " | (+1%)"


}

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Chive%2Chive_dollar&vs_currencies=usd", {
  headers: {
    Accept: "application/json"
  }
}).then(response => response.json())
  .then(data => localStorage.setItem('status', JSON.stringify(data) ))
  .then(setTimeout(() => triggered(), 800))


