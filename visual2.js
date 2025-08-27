const hero = document.getElementById('hero');
const form = document.getElementById('form');
const getStartedBtn = document.getElementById('getStartedBtn');
const backBtn = document.getElementById('backBtn');

getStartedBtn.addEventListener('click', () => {
    const overlay = document.getElementById('comingSoonOverlay');

    // Animate hero out
    hero.style.animation = 'slideUpHide 0.5s forwards';
    hero.style.pointerEvents = 'none';
    setTimeout(() => {
        hero.style.display = 'none';

        // Show form in background (optional)
        form.style.display = 'flex';
        form.style.visibility = 'visible';
        form.style.pointerEvents = 'none'; // Make form unclickable
        form.style.animation = 'slideUpShow 0.5s forwards';

        // Show overlay on top
        overlay.style.display = 'flex';
        overlay.style.animation = 'fadeInOverlay 0.5s forwards';
    }, 500);
});




window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const subtitle2 = document.querySelector('.subtitle2');
    const description = document.querySelector('.description');
    const heroButtons = document.querySelector('.hero-buttons');
    const footer = document.querySelector('.footer');

    setTimeout(() => {
    title.classList.add('animate-in');
    setTimeout(() => {
        subtitle.classList.add('animate-in');
        subtitle2.classList.add('animate-in');
        setTimeout(() => {
        description.classList.add('animate-in');
        setTimeout(() => {
            heroButtons.classList.add('animate-in');
            setTimeout(() => {
            footer.classList.add('animate-in');
            }, 0); // delay for footer
        }, 300); // delay for buttons
        }, 300); // delay for description
    }, 1000); // delay for subtitle
    }, 100); // initial delay for title
});

const textElement = document.querySelector('.subtitle2');
const phrases = [
    "looks.",
    "feel.",
    "style.",
    "functionality.",
    "ease.",
    "simplicity.",
    "creativity.",
    "efficiency.",
    "innovation.",
    "clarity.",
    "flexibility.",
    "intuitiveness.",
    "accessibility.",
    "organization.",
    "productivity.",
    "customization.",
    "collaboration.",
    "inspiration.",
    "versatility.",
    "performance."
];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;


function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    const typedText = currentPhrase.slice(0, currentCharIndex);
    textElement.innerHTML = typedText + '<span class="cursor">_</span>'; // Add underscore

    if (isDeleting) {
        currentCharIndex--;
        if (currentCharIndex < 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            currentCharIndex = 0;
        }
    } else {
        currentCharIndex++;
        if (currentCharIndex === currentPhrase.length) {
            isDeleting = true;
        }
    }

    const typingSpeed = isDeleting ? 200 : 200; // Adjust speed here
    setTimeout(type, typingSpeed);
}

getStartedBtn.addEventListener('click', () => {
    hero.style.animation = 'slideUpHide 0.5s forwards';
    hero.style.pointerEvents = 'none';
    setTimeout(() => {
    hero.style.visibility = 'hidden';
    hero.style.display = 'none';
    form.style.display = 'flex';
    form.style.visibility = 'visible';
    form.style.pointerEvents = 'auto';
    form.style.animation = 'slideUpShow 0.5s forwards';
    }, 500);
});

backBtn.addEventListener('click', () => {
    form.style.animation = 'slideUpHide 0.5s forwards';
    form.style.pointerEvents = 'none';
    setTimeout(() => {
    form.style.visibility = 'hidden';
    form.style.display = 'none';
    hero.style.display = 'flex';
    hero.style.visibility = 'visible';
    hero.style.pointerEvents = 'auto';
    hero.style.animation = 'slideUpShow 0.5s forwards';
    }, 500);
});
