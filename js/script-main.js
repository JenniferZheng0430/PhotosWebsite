

const overlay = document.getElementById('overlay-intro');
const close = document.getElementById('close-popup');
const intro = document.getElementById('popup-intro');



const closePopup = () => {
    overlay.style.display = "none";
    overlay.style.opacity = 0;
    intro.style.opacity = 0;
    guide()
};
 
const showClose = () => {
    close.style.display = "block";
    close.style.opacity = 1;
};

const typeWriter = function(txt, id, speed) {
    setTimeout(function(){
        document.getElementById(id).innerHTML += txt[0]
        txt = txt.slice(1, txt.length)
        if(txt.length > 0){
            typeWriter(txt, id, speed)
        }
    }, speed);
}

const showOverlay = () => {
    overlay.classList.add('active')

    $('#popup-text').append($('<h2 id = "popup-text-h" style="text-align: center"></h2>'))
    let txt = 'Welcome to my portfolio!'
    let id = 'popup-text-h'
    let speed = 10
    typeWriter(txt, id, speed)
    setTimeout(function(){
        showClose()
        $('#popup-text').append($('<div style="width:100%; height: 1px; background-image: linear-gradient(to right, transparent, #e0e0e0, transparent); margin-bottom: 20px"></div>'))
        $('#popup-text').append($('<p id="popup-text-p1"></p>'))
        $('#popup-text').append($('<p id="popup-text-p2" style="font-size:20px"></p>'))
        $('#popup-text').append($('<p id="popup-text-p3" style="font-size:8px; margin-top:20px; float: right"></p>'))
    }, 500)
    setTimeout(function(){
        txt = 'I coded this website using Html and Javascript to show my projects and my hobbies. It includes my photography collection, coding projects, statistics research, and resume. I wish you can see some of my personalities and passions in this website. Hope you enjoy it!'
        id = "popup-text-p1"
        speed = 20
        typeWriter(txt, id, speed)
    }, 2000)
    setTimeout(function(){
        txt = 'Hit on the X botton to begin!'
        id = "popup-text-p3"
        speed = 20
        typeWriter(txt, id, speed)
    }, 8000)
};
 
setTimeout(showOverlay, 1000);

