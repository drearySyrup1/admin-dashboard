const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const nav = document.getElementById('nav');

function setChildren(state) {
    Array.from(nav.children).forEach(child => {
        child.style.visibility = state;
    })
}

let expaded = false;

openNav.addEventListener('click', e => {
    nav.style.visibility = 'visible';
    nav.classList.add('slideIn')
    console.log('asdasd')
    expaded = true;
});

nav.addEventListener('animationstart', e => {
    // if (e.animationName === 'slidein') setChildren('hidden');
    setChildren('hidden');
})

nav.addEventListener('animationend', e => {
    if (e.animationName === 'slidein') setChildren('visible');
    if (e.animationName === 'slideout') {
        nav.style.visibility = 'hidden';
    }
    nav.classList.remove('slideIn');
    nav.classList.remove('slideOut');
    console.log(e)
})

closeNav.addEventListener('click', e => {
    nav.classList.add('slideOut')
    console.log('asdasd')
    expaded = false;
});


window.addEventListener('resize', e => {
    const width = e.target.innerWidth;
    if (width >= 1100) {
        nav.style.visibility = 'visible';
        expaded = false;
        setChildren('visible')
    } else {
        if (!expaded) {
            nav.style.visibility = 'hidden';
            setChildren('hidden')
        }
    }
})