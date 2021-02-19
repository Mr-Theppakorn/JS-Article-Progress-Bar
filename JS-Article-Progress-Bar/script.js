const container = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');
var containerHeight;

window.onscroll = function () {
    containerHeight = container.offsetHeight - window.innerHeight;
    var containerPos = container.getBoundingClientRect();
    var diff = this.containerHeight + containerPos.top;
    var progressPercentage = diff / containerHeight * 100;
    var cssWidht = Math.floor(100 - progressPercentage);

    highlight.style.width = cssWidht + "%";
};