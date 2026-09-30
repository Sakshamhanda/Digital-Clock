function updateTime() {

    const now = new Date();

    document.querySelector(".time").textContent =
        now.toLocaleTimeString("en-US");

    document.querySelector(".date").textContent =
        now.toLocaleDateString("en-US");
}

updateTime();

setInterval(updateTime,1000);