class cursor{
    constructor(){
        this.cps = 1;
    }
}
class grandma{
    constructor(){
        this.cps = 2;
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
function updateCookieCounter(){
    COOKIECOUNTER.textContent = Math.floor(cookies) + " cookies";
}
function updateCPSbasedOnBuildings(){
    cps = 0;
    buildings.forEach((building) =>{
        cps = cps + building.cps;
    })
}
function animationLoop(){
    updateCPSbasedOnBuildings();
    updateCookieCounter();
    requestAnimationFrame(animationLoop)
}

const COOKIE = document.getElementById("cookie");
const COOKIECOUNTER = document.getElementById("cookieDisplay");
let cookiesPerClick = 1;
let cps = 0;
let cookies = 0;
let buildings = [new cursor(), new shop(), new mine()]

animationLoop();
COOKIE.addEventListener("click", () => {
    cookies = cookies + cookiesPerClick;
})
setInterval(() => {
    cookies = cookies + cps/100;
}, 10);