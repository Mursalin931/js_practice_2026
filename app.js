const myData = document.querySelector("form")
const taskName = document.querySelector(".task_name")
const rightInner = document.querySelector(".right_inner")

// console.log(taskItem)

myData.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskItem = document.createElement("div")
    taskItem.classList.add("task")

    // create checkbox first
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    // create lable 
    const taskLabel = document.createElement("label")
    taskLabel.innerText = taskName.value

    // create button
    const dltBtn = document.createElement("button")
    dltBtn.type = "button"
    dltBtn.textContent = "Remove"


    taskItem.append(checkbox, taskLabel, dltBtn)
    rightInner.append(taskItem)
    taskName.value = ""


    // checkbox 

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {
            taskLabel.style.textDecoration = "line-through"
        }
        else {
            taskLabel.style.textDecoration = "none"
        }
    })

    //  remove item
    dltBtn.addEventListener("click", () => {
        if (checkbox.checked) {
            taskItem.remove()
        }
        else {
            alert("You must check the checkbox..!")
        }
    })

})