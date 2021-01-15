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
                transform: 'translateX(-25px)',
                opacity: 0
            },
            { 
                transform: 'translateX(0px)',
                opacity: 100
            }
        ], {
            duration: 500,
            iterations: 1
        });
        card_2.animate([
            {   
                transform: 'translateX(-25px)',
                opacity: 0
            },
            { 
                transform: 'translateX(0px)',
                opacity: 100
            }
        ], {

            duration: 500,
            iterations: 1
        });
        card_3.animate([
            {   
                transform: 'translateX(-25px)',
                opacity: 0
            },
            { 
                transform: 'translateX(0px)',
                opacity: 100
            }
        ], {
            duration: 500,
            iterations: 1
        });
        card_1.style.opacity = 100;
        card_2.style.opacity = 100;
        card_3.style.opacity = 100;
        document.removeEventListener('scroll', trigger);
    }
}

function pulse_1() {
    btn_1.animate([
        {
            transform: 'translateY(25px)'
        }
    ], {
            duration: 1000,
            iterations: infinite
    });
}

function pulse_2() {
    btn_2.animate([
        {
            transform: 'scale(.5)'
        },
        {
            transform: 'scale(1)'
        }
    ], {
            duration: 1000,
            iterations: infinite
    });
}

const box = document.querySelector('#experience');
const card_1 = document.querySelector('#card_1');
const card_2 = document.querySelector('#card_2');
const card_3 = document.querySelector('#card_3');

const btn_1 = document.querySelector('#btn_1');
const btn_2 = document.querySelector('#btn_2');

document.addEventListener('scroll', trigger);
btn_1.addEventListener('click', pulse_1);
btn_2.addEventListener('click', pulse_2);
