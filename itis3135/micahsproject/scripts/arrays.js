function user_array()
{
    let index = document.getElementById("arrays-example").value;
    let names = ["Dwight", "Jim", "Pam", "Michael", "Kevin", "Andy", "Phyllis", "Stanley", "Oscar", "Angela"];

    document.getElementById("print-text").innerHTML = names[index] + " will be given a raise!";
}

function jim_button()
{
    document.getElementById("display-answer").innerHTML = "Actually, “myName” will be assigned to “Jim”! Because array indexes begin at 0, the corresponding index number for “Dwight” would be just that; 0. This means that the next item in the array would have the index 1, which is “Jim”."
}

function dwight_button()
{
    document.getElementById("display-answer").innerHTML = "That’s right! Because array indexes begin at 0, the second array item (not the first!) would have the index of 1, which is “Jim”."
}