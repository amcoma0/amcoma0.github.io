let classesCounter = 0;

function checkForm()
{

}

function resetForm()
{
    if (document.getElementById("reset"))
    {
        document.getElementById("name").reset();
        document.getElementById("mascot").reset();
        document.getElementById("image").reset();
        document.getElementById("personal-background").reset();
        document.getElementById("professional-background").reset();
        document.getElementById("academic-background").reset();
        document.getElementById("web-dev-background").reset();
        document.getElementById("computer-platform").reset();
        document.getElementById("course").reset();
        document.getElementById("funny").reset();
        document.getElementById("extra-content").reset();
    }
}

function deleteCourse()
{
    document.getElementById("course-label" + classesCounter).remove();
    document.getElementById("description-label" + classesCounter).remove();
    document.getElementById("course" + classesCounter).remove();
    
    classesCounter--;

    if (classesCounter = 0)
    {
        document.getElementById("delete-button").remove();
    }
}

function addCourse()
{
    classesCounter++;

    const courseLabel = document.createElement("input");
    courseLabel.setAttribute("id" ,"courseLabel" + classesCounter);
    courseLabel.setAttribute("type", "text");
    courseLabel.setAttribute("placeholder", "ITIS 3135");
    courseLabel.setAttribute("required", "true");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("id", "description-label" + classesCounter);
    descriptionLabel.innerHTML = "Course Description:";

    const newCourse = document.createElement("textarea");
    newCourse.setAttribute("id", "course" + classesCounter);
    newCourse.setAttribute("required", "true");

    if (classesCounter > 1)
    {
        document.getElementById("delete-button").remove();
    }
    
    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.setAttribute("value", "Delete Course");
    deleteButton.setAttribute("onclick", "deleteCourse()");
    
    document.getElementById("course-list").appendChild(courseLabel);
    document.getElementById("course-list").appendChild(descriptionLabel);
    document.getElementById("course-list").appendChild(newCourse);
    document.getElementById("course-list").appendChild(deleteButton);
}

function createListItem(nameOfItem, descriptionOfItem)
{
    let li = document.createElement("li");
    
}

function submitForm()
{
    let name = document.getElementById("name").value;
    let mascot = document.getElementById("mascot").value;
    let image = document.getElementById("image").value;
    let personal_background = getElementById("personal-background").value;
    let professional_background = getElementById("professional-background").value;
    let academic_background = getElementById("academic-background").value;
    let web_dev_background = getElementById("web-dev-background").value;
    let computer_platform = getElementById("computer-platform").value;
    let course_list = getElementById("course-list").value;
    let funny_thing = getElementById("funny").value;
    let anything_else = getElementById("extra-content").value;

    let main = document.createElement("main");
    let h2 = document.createElement("h2");
    let ul = document.createElement("ul");

    h2.appendChild(name);
    h2.appendChild(mascot);

    main.appendChild(header);
    main.appendChild();
    
    document.replaceWith(main);
}