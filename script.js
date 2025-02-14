document.addEventListener('DOMContentLoaded', () => {
    const message = "Meareys, you make my heart skip a beat. Your smile brightens my day, and your love fills my life with joy. Will you be my Valentine? 💝";
    const typingText = document.querySelector('.typing-text');
    let charIndex = 0;

    // Typing animation
    function typeMessage() {
        if (charIndex < message.length) {
            typingText.textContent += message.charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 50);
        }
    }

    typeMessage();

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('span');
        heart.textContent = ['💖', '💝', '💗', '💓'][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        document.querySelector('.floating-hearts').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    setInterval(createHeart, 300);
}); 