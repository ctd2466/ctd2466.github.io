function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    if (
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
        return true;
    }
    if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
        return true;
    }
    return false;
}


function trigger() {
    if (isInViewport(box)) {
        card_1.animate([
            {   
                transform: 'translateX(-50px)',
                opacity: 0
            },
            { 
                transform: 'translateX(0px)',
                opacity: 100
            }
        ], {
            duration: 1400,
            iterations: 1
        });
        card_2.animate([
            {   
                transform: 'translateX(-50px)',
                opacity: 0
            },
            { 
                transform: 'translateX(0px)',
                opacity: 100
            }
        ], {

            duration: 1400,
            iterations: 1
        });
        card_3.animate([
            {   
                transform: 'translateX(-50px)',
                opacity: 0
            },
            { 
                transform: 'translateX(0px)',
                opacity: 100
            }
        ], {
            duration: 1400,
            iterations: 1
        });
        card_1.style.opacity = 100;
        card_2.style.opacity = 100;
        card_3.style.opacity = 100;
        document.removeEventListener('scroll', trigger);
    }
}

function pulse_1() {
    arrows_1.animate([
        {
            opacity: 100
        },
        {
            opacity: 0
        }
    ], {
            duration: 1000,
            iterations: 1
    });
}

function pulse_2() {
    arrows_2.animate([
        {
            opacity: 100
        },
        {

            opacity: 0
        }
    ], {
            duration: 1000,
            iterations: 1
    });
}


function pulse_3() {
    arrows_3.animate([
        {
            opacity: 100
        },
        {
            opacity: 0
        }
    ], {
            duration: 1000,
            iterations: 1
    });
}

function click() {
    pfp.animate([
        {   
            transform: 'scale(.9)',
        },
        { 
            transform: 'scale(1)',
        }
    ], {
        duration: 1000,
        iterations: 1
    });
}

const box = document.querySelector('#experience');
const card_1 = document.querySelector('#card_1');
const card_2 = document.querySelector('#card_2');
const card_3 = document.querySelector('#card_3');

const btn_1 = document.querySelector('#btn_1');
const btn_2 = document.querySelector('#btn_2');
const btn_3 = document.querySelector('#btn_3');

document.addEventListener('scroll', trigger);

const arrows_1 = document.querySelector('#arrows_1');
const arrows_2 = document.querySelector('#arrows_2');
const arrows_3 = document.querySelector('#arrows_3');

btn_1.addEventListener('mouseover', pulse_1);
btn_2.addEventListener('mouseover', pulse_2);
btn_3.addEventListener('mouseover', pulse_3);


const pfp = document.querySelector('#pfp');
pfp.addEventListener('click', click);
