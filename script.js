function openCard() {
    document.querySelector(".envelope").classList.toggle("open");
}
function openCard() {
    let envelope = document.querySelector(".envelope");
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        launchConfetti();
    }
}

function launchConfetti() {
    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);
        
        let size = Math.random() * 8 + 5;
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
