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
var totalStampsStatText = document.getElementById("totalStampsStatText");
var embassyImage = document.getElementById("embassy");

function updateDisplay(){
    totalStampsText.textContent = formatNumber(stamps);
    perClickTextStat.textContent = formatNumber(perClick);
    totalClicksText.textContent = formatNumber(totalClicks);
    perClickTextCenter.textContent = `Click The Embassy : +${formatNumber(perClick)}`;
    totalStampsStatText.textContent = formatNumber(totalStamps); 
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

updateDisplay();