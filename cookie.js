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
    updateCookieCounter();
    updateBuildingCounter();
}
function updateBuildingCounter() {
    document.getElementById("cursorDisplay").textContent = numberOfCursors + " Cursors";
    document.getElementById("factoryDisplay");
    document.getElementById("mineDisplay");
    document.getElementById("shopDisplay");
}
function updateCookieCounter(){
    COOKIECOUNTER.textContent = Math.floor(cookies) + " cookies";
}
function updateCPSbasedOnBuildings(){
    cps = 0;
    buildings.forEach((building) =>{
        cps = cps + building.cps;
    })
}
function assignBuildingCounts(){
    totalBuildings = buildings.length;
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
let buildings = [new cursor(), new shop(), new mine()];
let totalBuildings = 0;
let numberOfCursors = 0;

animationLoop();
COOKIE.addEventListener("click", () => {
    cookies = cookies + cookiesPerClick;
})
setInterval(() => {
    cookies = cookies + cps/100;
}, 10);