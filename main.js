

function star() {

    let count = 50;

    let scene = document.querySelector('.scene');
    
    for (let i = 0; i< 50; i++) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px'
        star.style.height = h + 'px'
        star.style.animationDuration = duration + 's'

        scene.appendChild(star)
    }
}

star()