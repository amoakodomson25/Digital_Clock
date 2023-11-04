function UpdateTime() {
    const clockElement = document.getElementById('time');
    const now = new Date();
    const time = now.toLocaleTimeString();
    clockElement.textContent = time;
}
setInterval(UpdateTime, 1000);
UpdateTime();