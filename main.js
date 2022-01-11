function preload() {
}

function setup() {
    canvas=createCanvas(550,400);

    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
    }
function draw() {
    fill(55, 85, 117)
stroke(40, 50, 54)
circle( 510,30,50);

fill(55, 85, 117)
stroke(40, 50, 54)
circle( 40,30,50);

fill(55, 85, 117)
stroke(40, 50, 54)
circle( 40,370,50);

fill(55, 85, 117)
stroke(40, 50, 54)
circle( 510,370,50);

fill(73, 94, 78)
stroke(40,50,54)
rect(70, 5, 411, 50, 20);

fill(73, 94, 78)
stroke(40,50,54)
rect(70, 345, 411, 50, 20);

fill(73, 94, 78)
stroke(40,50,54)
rect(15, 60, 50, 280, 20);

fill(73, 94, 78)
stroke(40,50,54)
rect(485, 60, 50, 280, 20);

image(video, 100, 70, 350,260);
}