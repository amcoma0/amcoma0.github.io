function showNum(num)
{
    const textarea = document.createElement(textarea);
    const number = document.createTextNode(num);

    textarea.appendChild(number);

    document.getElementsByID("display").appendChild(textarea);
}