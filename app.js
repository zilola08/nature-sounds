const buttonsPlayPause = document.querySelectorAll('button')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')

const morning = document.querySelector('.morning')
const bird = document.querySelector('.bird')
const water = document.querySelector('.water')
const rain = document.querySelector('.rain')
const night = document.querySelector('.night')
const fire = document.querySelector('.fireplace')
const audio = new Audio();
const mainSection = document.querySelector(".main")
const navlinks = document.querySelectorAll(".navlink")
const navbarBurgerIcon = document.querySelector('.navbar-collapse-menu-icon')
const burgerLinks = document.querySelectorAll('.nav-burger-link')

let isPlay = false;

const toggleButton = () => {
    if (!isPlay) {
        buttonPlay.classList.remove("hide-button")
        buttonPause.classList.add("hide-button")
    } else {
        buttonPause.classList.remove("hide-button")
        buttonPlay.classList.add("hide-button")
    }
}

function pauseAudio() {
    audio.pause();
}

function playAudio() {
    audio.play();
}

function loadSong(category) {
    for (let i = 1; i < 2; i++) {
        audio.src = `./assets/audio/${category}-${i}.mp3`;
    }
}

audio.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);


// MEDIA QUERY 
const desktop = window.matchMedia('(min-width: 767px)');

// DESKTOP AND MOBILE SETTINGS:
window.onresize = function () { location.reload(); }

// Check the media query and choose the appropriate settings:
checkIfDesktop();
function checkIfDesktop() {
    if (desktop.matches) {
        // DESKTOP

        morning.addEventListener('click', function (e) {
            let category = e.target.id;
            loadSong(category);
            playAudio();
            isPlay = true;
            toggleButton();
            mainSection.style.backgroundImage = `url('./assets/img/${category}.jpeg')`
            navlinks.forEach(navlink => {
                navlink.classList.remove("navlink-active")
            })
            e.target.classList.add("navlink-active")
        })

        bird.addEventListener('click', function (e) {
            let category = e.target.id;
            loadSong(category);
            playAudio();
            isPlay = true;
            toggleButton();
            mainSection.style.backgroundImage = `url('./assets/img/${category}.jpeg')`
            navlinks.forEach(navlink => {
                navlink.classList.remove("navlink-active")
            })
            e.target.classList.add("navlink-active")
        })

        water.addEventListener('click', function (e) {
            let category = e.target.id;
            loadSong(category);
            playAudio();
            isPlay = true;
            toggleButton();
            mainSection.style.backgroundImage = `url('./assets/img/${category}.jpeg')`
            navlinks.forEach(navlink => {
                navlink.classList.remove("navlink-active")
            })
            e.target.classList.add("navlink-active")
        })

        rain.addEventListener('click', function (e) {
            let category = e.target.id;
            loadSong(category);
            playAudio();
            isPlay = true;
            toggleButton();
            mainSection.style.backgroundImage = `url('./assets/img/${category}.jpeg')`
            navlinks.forEach(navlink => {
                navlink.classList.remove("navlink-active")
            })
            e.target.classList.add("navlink-active")
        })

        night.addEventListener('click', function (e) {
            let category = e.target.id;
            loadSong(category);
            playAudio();
            isPlay = true;
            toggleButton();
            mainSection.style.backgroundImage = `url('./assets/img/${category}.jpeg')`
            navlinks.forEach(navlink => {
                navlink.classList.remove("navlink-active")
            })
            e.target.classList.add("navlink-active")

        })

        fire.addEventListener('click', function (e) {
            let category = e.target.id;
            loadSong(category);
            playAudio();
            isPlay = true;
            toggleButton();
            mainSection.style.backgroundImage = `url('./assets/img/${category}.jpeg')`
            navlinks.forEach(navlink => {
                navlink.classList.remove("navlink-active")
            })
            e.target.classList.add("navlink-active")
        })

        buttonsPlayPause.forEach(button => {
            button.addEventListener('click', (e) => {
                if (!isPlay) {
                    navlinks.forEach(navlink => {
                        if (navlink.classList.contains("navlink-active")) {
                            loadSong(`${navlink.id}`);
                            playAudio();
                            isPlay = true;
                            toggleButton();
                        }
                    })
                }
                else {
                    pauseAudio();
                    isPlay = false;
                    toggleButton();
                }
            })
        });


    } else {

        // BURGER MENU MOBILE

        const burgerMenuIcon = document.querySelector('.navbar-collapse-menu-icon');
        const burgerMenu = document.querySelector('.navbar-burger')
        const closeIcon = document.querySelector('.closing-icon')

        buttonsPlayPause.forEach(button => {
            button.addEventListener('click', (e) => {
                if (!isPlay) {
                    burgerLinks.forEach(burgerLink => {
                        if (burgerLink.classList.contains("navlink-active")) {
                            let category = burgerLink.id
                            loadSong(`${category.substr(2, category.length)}`);
                            playAudio();
                            isPlay = true;
                            toggleButton();
                        }
                    })
                }
                else {
                    pauseAudio();
                    isPlay = false;
                    toggleButton();
                }
            })
        });

        burgerMenuIcon.addEventListener('click', (e) => {
            setTimeout(() => {
                burgerMenu.classList.toggle('shown');
                burgerMenuIcon.classList.toggle('shown');
            }, 0.001);
        })

        closeIcon.addEventListener('click', (e) => {
            setTimeout(() => {
                burgerMenu.classList.remove('shown');
                burgerMenuIcon.classList.toggle('shown');
            }, 0.001);
        })

        burgerLinks.forEach(burgerLink =>
            burgerLink.addEventListener('click', (e) => {
                setTimeout(() => {
                    burgerMenu.classList.remove('shown');
                    burgerMenuIcon.classList.toggle('shown');
                    let category = e.target.id;
                    loadSong(category.substr(2, category.length));
                    playAudio();
                    isPlay = true;
                    toggleButton();
                    mainSection.style.backgroundImage = `url('./assets/img/${category.substr(2, category.length)}.jpeg')`;
                    burgerLinks.forEach(burgerLink => {
                        burgerLink.classList.remove("navlink-active");
                    })
                    e.target.classList.add("navlink-active");
                }, 0.001);
            }
            ))

        document.addEventListener('click', (e) => {
            const clickedPoint = e.target;
            if (!burgerMenu.contains(clickedPoint)) {
                burgerMenu.classList.remove('shown');
                burgerMenuIcon.classList.add('shown');
            }
        })
    }
}
