class cursor{
    constructor(){
        this.cps = 1;
    }
}
class factory{
    constructor(){
        this.cps = 4;
    }
}
class mine{
    constructor(){
        this.cps = 10;
    }
}
class shop{
    constructor(){
        this.cps = 100;
    }
}
function updateCounters(){
    updateCookieCounters();
    updateBuildingCounter();
}
function updateBuildingCounter() {
    document.getElementById("cursorDisplay").textContent = numberOfCursors + " Cursors";
    document.getElementById("factoryDisplay").textContent = numberOfFactories + " Factories";
    document.getElementById("mineDisplay").textContent = numberOfMines + " Mines";
    document.getElementById("shopDisplay").textContent = numberOfShops + " Shops";
}
function updateCookieCounters(){
    COOKIECOUNTER.textContent = Math.floor(cookies) + " cookies";
    document.getElementById("cpsDisplay").textContent = cps + " cookies per second";
    document.getElementById("cpcDisplay").textContent = cookiesPerClick + " cookies per click";
    document.getElementById("buildingCountDisplay").textContent = buildingCount + " buildings total";
}
function updateCPSbasedOnBuildings(){
    cps = 0;
    buildings.forEach((building) =>{
        cps = cps + building.cps;
    })
}
function assignBuildingCounts(){
    buildingCount = buildings.length;
}
function animationLoop(){
    assignBuildingCounts();
    updateCPSbasedOnBuildings();
    updateCounters();
    requestAnimationFrame(animationLoop)
}

const COOKIE = document.getElementById("cookie");
const COOKIECOUNTER = document.getElementById("cookieDisplay");
let cookiesPerClick = 1;
let cps = 0;
let cookies = 0;
let buildings = [];
let totalBuildings = 0;
let numberOfCursors = 0;
let numberOfFactories = 0;
let numberOfMines = 0;
let numberOfShops = 0;
let buildingCount = numberOfCursors + numberOfFactories + numberOfMines + numberOfShops;
let GNRLINFO = {
    buildingPrices: {
        cursor: 15,
        factory: 100,
        mine: 1000,
        shop: 10000
    } 
}

COOKIE.addEventListener("click", () => {
    cookies = cookies + cookiesPerClick;
})
setInterval(() => {
    cookies = cookies + cps/100;
}, 10);
document.getElementById("cursorDisplay").addEventListener("click", () => {
    if(cookies >= GNRLINFO.buildingPrices.cursor){
        buildings.push(new cursor());
        cookies = cookies - GNRLINFO.buildingPrices.cursor;
        numberOfCursors++;
    }else{
        alert("Not enough money")
    }
});
document.getElementById("factoryDisplay").addEventListener("click", () => {
    if(cookies >= GNRLINFO.buildingPrices.factory){
        buildings.push(new factory());
        cookies = cookies - GNRLINFO.buildingPrices.factory;
        numberOfFactories++;
    }else{
        alert("Not enough money")
    }
});
document.getElementById("mineDisplay").addEventListener("click", () => {
    if(cookies >= GNRLINFO.buildingPrices.mine){
        buildings.push(new mine());
        cookies = cookies - GNRLINFO.buildingPrices.mine;
        numberOfMines++;
    }else{
        alert("Not enough money")
    }
});
document.getElementById("shopDisplay").addEventListener("click", () => {
    if(cookies >= GNRLINFO.buildingPrices.shop){
        buildings.push(new shop());
        cookies = cookies - GNRLINFO.buildingPrices.shop;
        numberOfShops++;
    }else{
        alert("Not enough money")
    }
});
animationLoop();