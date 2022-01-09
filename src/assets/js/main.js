"use strict";
let blokz = "";

document.getElementById("blokz").innerHTML = "loading...";

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
    document.getElementById("blokz").innerHTML = "<h1>hive-engine fair market value tool</h1>"
    let rate = data.litecoin.usd/data.hive.usd;
    let buyrate = rate-(rate/100);

    document.getElementById("blokz").innerHTML += "<h3>SWAP.LTC</h3>Actual rate : " + rate.toFixed(5) +  "<br />"
    let sellrate = rate+(rate/100)
    document.getElementById("blokz").innerHTML += buyrate.toFixed(5) + " to " + sellrate.toFixed(5) + "<br /><small>(1% range)</small>";

    
    let btcrate = data.bitcoin.usd/data.hive.usd;
    let btcbuyrate = btcrate-(btcrate/100)
    let btcsellrate = btcrate+(btcrate/100)
    document.getElementById("blokz").innerHTML += "<h3>SWAP.BTC</h3>Actual rate : " + btcrate.toFixed(5) +  "<br />"
    document.getElementById("blokz").innerHTML += btcbuyrate.toFixed(5) + " to " + btcsellrate.toFixed(5) + "<br /><small>(1% range)</small>"

    document.getElementById("blokz").innerHTML += "<hr /><div id='ads'>ads: </div>"

    document.getElementById("blokz").innerHTML += `<div style="position: fixed; left: 50%; transform: translate(-50%, 0); text-align: center; bottom: 0px; font-size: 2em; color: white; z-index: 1;">`
    document.getElementById("blokz").innerHTML += `  <a href="https://blokz.io" target="_blank"><img src="../images/blokz_ad.png" style="max-width: 60%;" width="728px"></a>`
    document.getElementById("blokz").innerHTML += `</div>`
    document.getElementById("blokz").innerHTML += `<!-- ^^^ Ad Block-->`

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


