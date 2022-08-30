// Given
var dollPerUnit = 8;
var carPerUnit = 14;
var stockLimit = 2000;
var capital = 20000;
var dollProfit = 2;
var carProfit = 3;

// Calc
var dolls = (carPerUnit * stockLimit - capital) / (carPerUnit - dollPerUnit);
var cars = stockLimit - dolls;
var totalOrderedToys = dolls + cars;
var toysOrderCost = dolls * dollPerUnit + cars * carPerUnit;
var profit =
  (dollPerUnit + dollProfit) * dolls + (carPerUnit + carProfit) * cars;

var dollsSpan = document.createElement('span');
dollsSpan.innerText = `Number of dolls: ${dolls}`;

var carsSpan = document.createElement('span');
carsSpan.innerText = `Number of cars: ${cars}`;

var profitSpan = document.createElement('span');
profitSpan.innerText = `Profit: ${profit}`;

var orderedtoysspan = document.createElement('span');
orderedtoysspan.innerText = `Total ordered toys: ${totalOrderedToys}`;

var orderedcostspan = document.createElement('span');
orderedcostspan.innerText = `Total ordered toys: ${toysOrderCost}`;

document.querySelector('body').appendChild(dollsSpan);
document.querySelector('body').appendChild(carsSpan);
document.querySelector('body').appendChild(profitSpan);
document.querySelector('body').appendChild(orderedtoysspan);
document.querySelector('body').appendChild(orderedcostspan);

