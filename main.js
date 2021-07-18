function preload() {}

function setup() {
    canvas=createCanvas(500,450)
    canvas.position(350,120)
    video=createCapture(VIDEO)
    video.hide()
    tint_colour=""
}



function draw() {
    image(video,0,0,640,480)
    tint(tint_colour)
}


function apply() {
    tint_colour=document.getElementById("colour_name").value
}


function take_snapshot() {
    save("tint.png")
}