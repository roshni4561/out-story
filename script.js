// Create floating hearts
function createHearts() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    
    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDelay = Math.random() * 5 + 's';
    
    // Make hearts clickable
    heart.addEventListener('click', function() {
        this.style.color = '#ff4757';
        this.style.transform = 'scale(2)';
        setTimeout(() => {
            this.remove();
        }, 500);
        
        // Create heart explosion
        for (let i = 0; i < 10; i++) {
            const miniHeart = document.createElement('div');
            miniHeart.innerHTML = '❤️';
            miniHeart.style.position = 'absolute';
            miniHeart.style.left = heart.style.left;
            miniHeart.style.top = heart.style.top;
            miniHeart.style.fontSize = '15px';
            miniHeart.style.opacity = '0';
            miniHeart.style.transform = 'translate(-50%, -50%)';
            miniHeart.style.animation = `miniHeartFloat ${Math.random() * 2 + 1}s forwards`;
            
            document.body.appendChild(miniHeart);
            
            setTimeout(() => {
                miniHeart.remove();
            }, 1000);
        }
    });
    
    container.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts periodically
setInterval(createHearts, 300);

// Add mini heart float animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes miniHeartFloat {
        0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { 
            opacity: 0; 
            transform: translate(
                ${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100 + 50}px, 
                -${Math.random() * 100 + 50}px
            ) scale(0.5); 
        }
    }
`;
document.head.appendChild(style);

// Music control
const musicControl = document.getElementById('musicControl');
let audio = null;

musicControl.addEventListener('click', function() {
    if (!audio) {
        // Use a romantic song (replace with your preferred song)
        audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        audio.loop = true;
        audio.play();
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    } else if (audio.paused) {
        audio.play();
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        musicControl.innerHTML = '<i class="fas fa-music"></i>';
    }
});

// Special button interaction
const specialButton = document.getElementById('specialButton');
const hiddenMessage = document.getElementById('hiddenMessage');

specialButton.addEventListener('click', function() {
    hiddenMessage.style.display = 'block';
    this.style.display = 'none';
    
    // Create heart explosion
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '20px';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.zIndex = '1000';
        heart.style.animation = `heartExplode ${Math.random() * 0.5 + 0.5}s forwards`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 500);
    }
    
    // Add event listeners for Yes/No buttons after they're visible
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    
    yesButton.addEventListener('click', function() {
        alert('Thank you for giving us another chance! ❤️ I promise to love you better this time. I\'ll contact you soon!');
    });
    
    noButton.addEventListener('click', function() {
        alert('I understand. My heart will keep a light on for you, always. Take your time.');
    });
});

// Add heart explode animation
const heartExplodeStyle = document.createElement('style');
heartExplodeStyle.innerHTML = `
    @keyframes heartExplode {
        0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { 
            opacity: 0; 
            transform: translate(
                ${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100 + 50}px, 
                -${Math.random() * 100 + 50}px
            ) scale(0.5); 
        }
    }
`;
document.head.appendChild(heartExplodeStyle);

// Love letter interaction
const readLetter = document.getElementById('readLetter');
const loveLetter = document.getElementById('loveLetter');
const closeLetter = document.getElementById('closeLetter');

readLetter.addEventListener('click', function() {
    loveLetter.style.display = 'flex';
});

closeLetter.addEventListener('click', function() {
    loveLetter.style.display = 'none';
});

// Unblock button
const unblockButton = document.getElementById('unblockButton');

unblockButton.addEventListener('click', function() {
    // Create a big heart animation
    const bigHeart = document.createElement('div');
    bigHeart.innerHTML = '❤️';
    bigHeart.style.position = 'fixed';
    bigHeart.style.left = '50%';
    bigHeart.style.top = '50%';
    bigHeart.style.fontSize = '100px';
    bigHeart.style.transform = 'translate(-50%, -50%) scale(0)';
    bigHeart.style.zIndex = '3000';
    bigHeart.style.animation = 'bigHeartBeat 1s forwards';
    bigHeart.style.color = '#ff4757';
    
    document.body.appendChild(bigHeart);
    
    setTimeout(() => {
        bigHeart.remove();
        loveLetter.style.display = 'none';
        alert('Thank you for unblocking my heart! ❤️ I promise to cherish this second chance. I\'ll be in touch soon!');
    }, 1000);
});

// Add big heart beat animation
const bigHeartBeatStyle = document.createElement('style');
bigHeartBeatStyle.innerHTML = `
    @keyframes bigHeartBeat {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
`;
document.head.appendChild(bigHeartBeatStyle);

// Animate sections as user scrolls
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section, .final-section');
    
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0);
            
            if (isVisible) {
                section.classList.add('animate__fadeInUp');
            }
        });
    }
    
    // Check on load
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});