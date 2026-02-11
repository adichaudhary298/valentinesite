function nextPage() {
    // Clear the container
    document.querySelector('.container').innerHTML = `
        <h1 class="header_text">YAY! I knew you would say YES! ❤️</h1>
        <div class="gif_container">
            <img src="valentine_celebration_bear.png" alt="Cute Bear Celebrating" id="main_gif">
        </div>
    `;
    
    // Add confetti
    startConfetti();
}

function moveButton() {
    const noBtn = document.getElementById('noButton');
    const yesBtn = document.getElementById('yesButton');
    
    // Make Yes button bigger
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 10) + 'px';
    let currentPadding = parseFloat(window.getComputedStyle(yesBtn).padding);
    yesBtn.style.padding = (currentPadding + 5) + 'px';

    // Change No button text
    const phrases = [
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;("
    ];
    
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    noBtn.innerText = randomPhrase;
    
    // Optional: Move the button randomly if you want harder difficulty
    // const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    // const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    // noBtn.style.position = 'absolute';
    // noBtn.style.left = \`\${x}px\`;
    // noBtn.style.top = \`\${y}px\`;
}

// Simple Confetti Implementation
function startConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Since we don't have the canvas confetti library imported, 
        // we'll just create simple DOM elements for confetti to keep it creating new files minimal
        createConfettiPiece();
        
    }, 250);
}

function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#ff4d6d', '#ff8fa3', '#ffb3c1', '#fff0f3'][Math.floor(Math.random() * 4)];
    confetti.style.position = 'absolute';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '0';
    confetti.style.borderRadius = '50%';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    document.body.appendChild(confetti);
    
    // Remove after animation
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Add CSS for confetti falling
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(720deg);
    }
}
`;
document.head.appendChild(styleSheet);
