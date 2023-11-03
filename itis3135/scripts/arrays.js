document.getElementById("name").focus();
let person = ["Collin Rolland", "Sufian Azfar", "Christopher White", "Joel Clarke", "Christian Palardy", "Zach Perkins", "Aaryanna Henry"]
let salary = [125000, 87253, 90000, 45000, 15000, 220000, 30000]

function displayResults()
{
    let averageSalary = 0;
    let highestSalary = 0;
    let sumOfSalaries = 0;

    for (let i = 0; i < person.length; i++)
    {
        if (salary[i] > highestSalary) 
        {
            highestSalary = salary[i];
        }
        sumOfSalaries += salary[i];
    }

    averageSalary = sumOfSalaries / salary.length;

    const div = document.createElement("div");
    div.setAttribute("id", "results");

    const h2 = document.createElement("h2");
    h2.innerText = "Results";

    const p_average_salary = document.createElement("p");
    p_average_salary.innerText = "Average Salary: $" + averageSalary.toFixed(2);

    const p_highest_salary = document.createElement("p");
    p_highest_salary.innerText = "Highest Salary: $" + highestSalary;

    div.appendChild(h2);
    div.appendChild(p_average_salary);
    div.appendChild(p_highest_salary);

    let currentDiv = document.getElementById("results");
    if (currentDiv != null)
    {
        currentDiv.innerHTML = div.innerHTML;
    }
    else {
        document.getElementById("main").appendChild(div);
    }
}

function displaySalary()
{
    const table = document.createElement("table");
    table.setAttribute("id", "results_table");
    const tr = document.createElement("tr");

    tr.innerHTML = `<th>Person</th><th>Salary</th>`;
    table.appendChild(tr);

    for (let i = 0; i < person.length; i++)
    {
        let currentRow = document.createElement("tr");

        currentRow.innerHTML = `<td>${person[i]}</td><td>$${salary[i]}</td>`;

        table.appendChild(currentRow);
    }

    let currentTable = document.getElementById("results_table");
    if (currentTable != null)
    {
        currentTable.innerHTML = table.innerHTML;
    }
    else {
        document.getElementById("main").appendChild(table);
    }
}

function addSalary()
{
   let newName = document.getElementById("name").value;
   let newSalary = document.getElementById("salary").value;

   if (!newName)
   {
        alert("Enter a name into the text box!");
   }
   else if (!newSalary)
   {
        alert("Enter a salary into the text box");
   }
   else if (typeof newName !== "string")
   {
        alert("Enter a name instead of numbers you dingus!");
   }
   else 
   {
        person.push(newName);
        salary.push(newSalary);

        document.getElementById("name").value = "";
        document.getElementById("salary").value = "";
   }
}

document.getElementById("add-salary").addEventListener('click', addSalary);
document.getElementById("display-results").addEventListener('click', displayResults);
document.getElementById("display-salary").addEventListener('click', displaySalary);