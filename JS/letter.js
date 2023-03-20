function execute() {

    const parallax = document.getElementById("parallax")
    const cover = document.getElementById("cover")

    cover.addEventListener('animationend', () => {
        cover.style.display = 'none'
        parallax.style.overflowY = 'auto'
    })


    const galaxy = document.getElementById("galaxy")

    for (let i = 0; i < 300; i++) {
        galaxy.innerHTML += "<div class=\"star-container\">" +
                                "<img src=\"..\\assets\\star.png\" alt=\"star\" class=\"star\" " + randStyle() + ">" +
                            "</div>"
    }


    const shootingStar = document.getElementById("shooting-star")
    const r = document.querySelector(':root');

    shootingStar.addEventListener('animationiteration', () => {
        shootingStar.style.animation = 'none'
        var shootingStarPath = rand(1, 50)
        r.style.setProperty('--shooting-star-path', (shootingStarPath + 50) + 'em')
        shootingStar.style.top = shootingStarPath + 'em'
        setTimeout(() => {
            shootingStar.style.animation = ''
        }, rand(15, 30) * 1000)
    })
}

function changeTheme() {
    const letter = document.getElementById("letter")

    const letterButton = letter.children[0]
    const letterParagraph = letter.children[1]

    if (letterButton.dataset.value == 0) {
        letterButton.dataset.value = 1
        letterButton.style.backgroundColor = 'rgb(0, 0, 0)'
        letter.style.backgroundColor = 'rgb(92, 92, 92, .9)'
        letterParagraph.style.color = 'rgb(255, 255, 255)'
    } else {
        letterButton.dataset.value = 0
        letterButton.style.backgroundColor = 'rgb(230, 230, 230)'
        letter.style.backgroundColor = 'rgb(92, 92, 92, .1)'
        letterParagraph.style.color = 'rgb(230, 230, 230)'
    }
}

function flyToTheMoon() {
    const website = document.documentElement

    if (website.requestFullscreen) {
    website.requestFullscreen();
    } else if (website.webkitRequestFullscreen) {
    website.webkitRequestFullscreen();
    } else if (website.msRequestFullscreen) {
    website.msRequestFullscreen();
    }

    var audio = new Audio('../assets/music.mp3')
    audio.loop = true
    audio.play()

    cover.style.animation = 'cover 3s'
}


function rand(start, end) {
    end++
    const num =  Math.floor(Math.random() * end)
    if (num < start) {
        return num + start
    } else if (num > end) {
        return num % end
    }
    return num
}


function randStyle() {
    return "style=\"" + 
            "width: " + rand(2, 5)/10 + "em;" +
            "rotate: " + rand(0, 360) + "deg;" +
            "margin-top:" + rand(0, 72) + "px;" +
            "margin-left:" + rand(0, 72) + "px;" +
            "animation-duration:" + rand(5, 15) + "s;" +
            "animation-delay:" + rand(0, 15) + "s;" +
            "\""
}