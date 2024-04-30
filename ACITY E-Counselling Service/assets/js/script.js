// JavaScript code for Typewriter effect
function typeWriter(id, text, speed) {
    let i = 0;
    const typingInterval = setInterval(() => {
        document.getElementById(id).textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(typingInterval);
        }
    }, speed);
}

// Initiate Typewriter effect
typeWriter('typewriter1', 'Need someone to talk to?', 50);
setTimeout(() => {
    typeWriter('typewriter2', 'Welcome to ACITY E-Counselling Service', 50);
}, 2000);
setTimeout(() => {
    typeWriter('typewriter3', 'Get the support you need from the counsellor', 50);
}, 4000);