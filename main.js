let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let moun1 = document.getElementById('moun1');
let moun2 = document.getElementById('moun2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let ousama = document.querySelector('.ousama');
window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    moun2.style.top = value * 2 + 'px';
    moun1.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 5 + 'px';
    ousama.style.fontSize = value + 'px';
    if (scrollY >= 60) {
        ousama.style.fontSize = 60 + 'px';
        ousama.style.position = 'fixed';

        if (scrollY >= 268) {
            ousama.style.display = 'none';
        } else {
            ousama.style.display = 'block';
        }
    }
    if (scrollY >= 148) {
        document.querySelector('.main').style.background = 'linear-gradient( #376281, #10001f)';

    } else {
        document.querySelector('.main').style.background = ' linear-gradient(rgb(129, 94, 29), rgb(70, 43, 3))';
    }
}
