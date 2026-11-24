var stamps = 0;
var perClick = 1;
var perSecond = 0;
var totalClicks = 0;
var totalStamps = 0;

var totalStampsText = document.getElementById("totalStampsText");
var perClickTextStat = document.getElementById("perClickTextStat");
var perSecondText = document.getElementById("perSecondText");
var totalClicksText = document.getElementById("totalClicksText");
var perClickTextCenter = document.getElementById("perClickTextCenter");
var totalStampsStatText = document.getElementById("totalStampStatText");
var embassyImage = document.getElementById("embassy");

embassyImage.addEventListener("click", clickEmbassy);

function clickEmbassy(e) {
    stamps += perClick;
    totalClicks += 1;
    totalStamps += perClick;
    updateDisplay();
    showFloat(e);
}
function persecondupdate() {
    stamps += perSecond;
    totalStamps += perSecond;
    updateDisplay();
}

function admin() {
    var adminperclick = parseFloat(window.prompt("Enter the amount of PerClick you want"));
    var adminpersec = parseFloat(window.prompt("Enter the amount of PerSec you want"));

    if (!isNaN(adminperclick)) perClick = adminperclick;
    if (!isNaN(adminpersec)) perSecond = adminpersec;

    updateDisplay();
}

document.addEventListener('visibilitychange', function(){
    if (document.hidden){
        document.title = "Come Back Or Cloud Is Comming"
        return;
    }
    document.title = "Embassy Clicker"
})

function buyUpgrade(clickBonus, secondBonus, price) {
    if (stamps >= price) {
        stamps -= price;
        perClick += clickBonus;
        perSecond += secondBonus;
        updateDisplay();
    } else {
        window.alert("You Dont Have Enough Stamps");
    }
}

function updateDisplay() {
    totalStampsText.textContent = formatNumber(stamps);
    perClickTextStat.textContent = formatNumber(perClick);
    perSecondText.textContent = formatNumber(perSecond);
    totalClicksText.textContent = formatNumber(totalClicks);
    perClickTextCenter.textContent = `Click The Embassy : +${formatNumber(perClick)}`;
    totalStampsStatText.textContent = formatNumber(totalStamps);
    CheckUpgrades();
}

function formatNumber(num) {
    var suffixes = ["", "k", "M", "B", "T", "Qa", "Qi"];
    var index = 0;
    while (num >= 1000 && index < suffixes.length - 1) {
        num = num / 1000;
        index++;
    }
    if (index === 0) {
        return String(Math.floor(num));
    }
    return num.toFixed(2).replace(/\.?0+$/, "") + suffixes[index];
}

function CheckUpgrades(){
    if (stamps >= 10){
        document.getElementById('buy10').classList.add('bg-green-400')
        document.getElementById('buy10').classList.remove('bg-gray-400')
    }
    else {
        document.getElementById('buy10').classList.add('bg-gray-400')
        document.getElementById('buy10').classList.remove('bg-green-400')
    }
    if (stamps >= 50){
        document.getElementById('buy50').classList.add('bg-green-400')
        document.getElementById('buy50').classList.remove('bg-gray-400')
    }
    else {
        document.getElementById('buy50').classList.add('bg-gray-400')
        document.getElementById('buy50').classList.remove('bg-green-400')
    }
    if (stamps >= 1500){
        document.getElementById('buy1500').classList.add('bg-green-400')
        document.getElementById('buy1500').classList.remove('bg-gray-400')
    }
    else {
        document.getElementById('buy1500').classList.add('bg-gray-400')
        document.getElementById('buy1500').classList.remove('bg-green-400')
    }if (stamps >= 1000){
        document.getElementById('buy1000').classList.add('bg-green-400')
        document.getElementById('buy1000').classList.remove('bg-gray-400')
    }
    else {
        document.getElementById('buy1000').classList.add('bg-gray-400')
        document.getElementById('buy1000').classList.remove('bg-green-400')
    }
    if (stamps >= 200000){
        document.getElementById('buy200k').classList.add('bg-green-400')
        document.getElementById('buy200k').classList.remove('bg-gray-400')
    }
    else {
        document.getElementById('buy200k').classList.add('bg-gray-400')
        document.getElementById('buy200k').classList.remove('bg-green-400')
    }
    if (stamps >= 100000){
        document.getElementById('buy100k').classList.add('bg-green-400')
        document.getElementById('buy100k').classList.remove('bg-gray-400')
    }
    else {
        document.getElementById('buy100k').classList.add('bg-gray-400')
        document.getElementById('buy100k').classList.remove('bg-green-400')
    }
    if (stamps >= 2000000){
        document.getElementById('buy2M').classList.add('bg-green-400')
        document.getElementById('buy2M').classList.remove('bg-gray-400')
    }
    else {
        document.getElementById('buy2M').classList.add('bg-gray-400')
        document.getElementById('buy2M').classList.remove('bg-green-400')
    }
}

function showFloat(e) {
    const span = document.createElement("span");
    span.textContent = "+" + perClick;
    span.className = "float-text";
    span.style.left = e.clientX + "px";
    span.style.top = e.clientY + "px";
    document.body.appendChild(span);

    span.addEventListener("animationend", () => span.remove());
}

var SAVE_KEY = "EmbassyData";

function saveGame() {
    try {
        var data = {
            stamps: stamps,
            perClick: perClick,
            perSecond: perSecond,
            totalClicks: totalClicks,
            totalStamps: totalStamps
        };
        localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch (err) {
        console.log("Could not save", err);
    }
}

function loadGame() {
    try {
        var saved = localStorage.getItem(SAVE_KEY);
        if (!saved) return;
        var data = JSON.parse(saved);
        stamps = Number(data.stamps) || 0;
        perClick = Number(data.perClick) || 1;
        perSecond = Number(data.perSecond) || 0;
        totalClicks = Number(data.totalClicks) || 0;
        totalStamps = Number(data.totalStamps) || 0;
    } catch (err) {
        console.log("Could not load save", err);
    }
}

loadGame();
setInterval(persecondupdate, 1000);
setInterval(saveGame, 5000);
window.addEventListener("beforeunload", saveGame);
updateDisplay();