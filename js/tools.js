function calculateFarm(){

let seeds = Number(document.getElementById("seeds").value);
let fertilizer = Number(document.getElementById("fertilizer").value);
let labor = Number(document.getElementById("labor").value);
let water = Number(document.getElementById("water").value);
let yieldKg = Number(document.getElementById("yield").value);
let price = Number(document.getElementById("price").value);

let totalCost = seeds + fertilizer + labor + water;

let costPerKg = totalCost / yieldKg;

let breakEven = totalCost / yieldKg;

let revenue = yieldKg * price;

let profit = revenue - totalCost;

document.getElementById("totalCost").innerText = totalCost.toFixed(2);
document.getElementById("costPerKg").innerText = costPerKg.toFixed(2);
document.getElementById("breakEven").innerText = breakEven.toFixed(2);
document.getElementById("revenue").innerText = revenue.toFixed(2);
document.getElementById("profit").innerText = profit.toFixed(2);

}