// Helper to check if an image exists (simple approach) or fallback
function loadPhoto(imgId, photoName, fallbackSrc) {
    const img = document.getElementById(imgId);
    if (!img) return;

    // Try to load the user provided photo
    const userPhoto = new Image();
    userPhoto.onload = function () {
        img.src = this.src;
        // Hide placeholder text if it exists
        const placeholder = img.parentElement.querySelector('.photo-placeholder-text');
        if (placeholder) placeholder.style.display = 'none';
    };
    userPhoto.onerror = function () {
        // If fail, load fallback or keep placeholder
        if (fallbackSrc) {
            img.src = fallbackSrc;
        }
    };
    userPhoto.src = `assets/${photoName}`;
}

// Interactive Functions
function revealGift() {
    const gift = document.getElementById('gift-box');
    const joyful = document.getElementById('joyful-content');

    if (gift) gift.style.display = 'none';
    if (joyful) {
        joyful.classList.remove('hidden');
        joyful.classList.add('visible');
    }

    // Confetti effect
    if (window.confetti) {
        window.confetti();
    }
}

function giveHug() {
    const hugImg = document.getElementById('hug-img');
    if (hugImg) {
        hugImg.style.transform = "scale(1.2)";
        setTimeout(() => {
            hugImg.style.transform = "scale(1)";
        }, 300);
    }
    const msg = document.getElementById('hug-message');
    if (msg) {
        msg.classList.remove('hidden');
        msg.classList.add('visible');
    }
}
