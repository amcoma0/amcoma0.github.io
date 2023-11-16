function setup()
{
    let canvas = createCanvas(500, 500);
    background(255);
}

function draw()
{
    if(mouseIsPressed)
    {
        fill(0);
        ellipse(mouseX, mouseY, 10, 10);
    }
}