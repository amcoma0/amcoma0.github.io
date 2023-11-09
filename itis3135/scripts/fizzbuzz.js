const fizzBuzzParagraph = document.getElementById("fizzbuzzcontent");

let fizzBuzzlist = document.getElementById("fizzbuzzlist");

function fizzBuzzBang()
{
    for (let i = 1; i <= 130; i++)
    {
        let listItem = document.createElement("li");
        let content = "";

        if (i % 3 === 0)
        {
            content += "fizz";
        }
        if (i % 5 === 0)
        {
            content += "buzz";
        }
        if (i % 7 === 0)
        {
            content += "BANG";
        }
        if (content === "")
        {
            content += i + " ";
        }

        fizzBuzzParagraph.textContent += (content + " ");

        listItem.textContent += content;
        fizzBuzzlist.appendChild(listItem);
    }
}

fizzBuzzBang();
    