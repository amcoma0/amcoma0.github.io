date();

function date()
{
    document.getElementById("date").innerHTML = Date();
    setTimeout(date, 1000);
}

function greeting()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;

    document.getElementById("greeting").innerHTML = "McComas Enterprises welcomes you, " + name + "! We're glad you're doing " + feeling + "!";
}

function numberToPolygon()
{
    let number = document.getElementById("number").value;

    if (number == 1)
    {
        number = Math.abs(number);
        alert("Henagon");
    }
    else if (number == 2)
    {
        number = Math.abs(number);
        alert("Digon");
    }
    else if (number == 3)
    {
        number = Math.abs(number);
        alert("Trigon");
    }
    else if (number == 4)
    {
        number = Math.abs(number);
        alert("Tetragon");
    }
    else if (number == 5)
    {
        number = Math.abs(number);
        alert("Pentagon");
    }
    else if (number == 6)
    {
        number = Math.abs(number);
        alert("Hexagon");
    }
    else if (number == 7)
    {
        number = Math.abs(number);
        alert("Heptagon");
    }
    else if (number == 8)
    {
        number = Math.abs(number);
        alert("Octagon");
    }
    else if (number == 9)
    {
        number = Math.abs(number);
        alert("Enneagon");
    }
    else if (number == 10)
    {
        number = Math.abs(number);
        alert("Decagon");
    }
}

function hitADriver() 
{
    let distance = Math.random() * 350;
    distance = Math.floor(distance);

    if (distance < 100 && distance > 0)
    {
        document.getElementById("driverDistance").innerHTML = "You hit your driver " + distance + "yards. You might wanna hit another one :(";
    }
    else if (distance < 200 && distance >= 100)
    {
        document.getElementById("driverDistance").innerHTML = "You hit your driver " + distance + 
            "yards. Not a bad drive, but you're gonna have a long second shot.";
    }
    else if (distance < 250 && distance >= 200)
    {
        document.getElementById("driverDistance").innerHTML = "You hit your driver " + distance + "yards. Pretty good drive.";
    }
    else if (distance < 300 && distance >= 250)
    {
        document.getElementById("driverDistance").innerHTML = "You hit your driver " + distance + "yards. You got a hold of that one, nice drive!";
    }
    else if (distance < 350 && distance >= 300)
    {
        document.getElementById("driverDistance").innerHTML = "You hit your driver " + distance + 
            "yards. Wow! You crushed that one, I would check the green to see if you made it!";
    }
}

function dadJoke()
{
    let jokeNumber = Math.random() * 5;
    jokeNumber = Math.floor(jokeNumber);

    switch (jokeNumber)
    {
        case 1 :
            document.getElementById("generateDadJoke").innerHTML = "My neighbor gave me a new roof for free. He said it was on the house.";
            break;
            
        case 2:
            document.getElementById("generateDadJoke").innerHTML = "What do you call a boomerang that doesn't come back? A stick.";
            break;
        
        case 3: 
            document.getElementById("generateDadJoke").innerHTML = "Dad did you get a haircut? 'No I got them all cut!'";
            break;

        case 4: 
            document.getElementById("generateDadJoke").innerHTML = "Why did the elephant quit his job? He was working for peanuts.";
            break;

        case 5:
            document.getElementById("generateDadJoke").innerHTML = "What are the least expensive type of teeth? Buck teeth!";
            break;

        default:
            document.getElementById("generateDadJoke").innerHTML = "No dad joke for you";
    }
}

function multiplyTwoNumbers()
{
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let multipliedNumber = number1 * number2;

    document.getElementById("multiplication").innerHTML = "Your multiplied number: " + multipliedNumber;
}

function makeAPutt()
{
    let number = Math.random() * 2;

    number = Math.floor(number);

    if (number == 1)
    {
        document.getElementById("putt").innerHTML = "You made it!!!";
    }
    else if (number == 2)
    {
        document.getElementById("putt").innerHTML = "You didn't make it :((";
    }
    else 
    {
        document.getElementById("putt").innerHTML = "Go ahead and putt already!";
    }
}