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
        alert();
    }
    else if (number == 2)
    {
        number = Math.abs(number);
        alert();
    }
    else if (number == 3)
    {
        number = Math.abs(number);
        alert();
    }
    else if (number == 4)
    {
        number = Math.abs(number);
        alert();
    }
    else if (number == 5)
    {
        number = Math.abs(number);
        alert();
    }
    else if (number == 6)
    {
        number = Math.abs(number);
        alert();
    }
    else if (number == 7)
    {
        number = Math.abs(number);
        alert();
    }
    else if (number == 8)
    {
        number = Math.abs(number);
        alert();
    }
    else if (number == 9)
    {
        number = Math.abs(number);
        alert();
    }
    else if (number == 10)
    {
        number = Math.abs(number);
        alert();
    }

}