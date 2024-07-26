(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
        $counter.textContent = 0;
    };

    document.getElementById("js-reset-button").addEventListener
    ("click",clickHandler);
})();

document.getElementById("js-reset-button").onclick = function () {
    this.classList.toggle("button2");
    };
