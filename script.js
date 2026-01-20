let sections = document.querySelectorAll(".section");
let current = 0;

function nextSection() {
    sections[current].classList.remove("active");
    current++;
    sections[current].classList.add("active");

    if (sections[current].id === "letter") startTyping();
}

const text = "Every smile of yours is my favorite view. I promise to stand by you in every moment of life. I love you forever.";
let index = 0;

function startTyping() {
    let target = document.getElementById("typeText");
    target.innerHTML = "";
    index = 0;

    let typing = setInterval(() => {
        target.innerHTML += text.charAt(index);
        index++;
        if (index >= text.length) clearInterval(typing);
    }, 60);
}
