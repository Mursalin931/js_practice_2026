const myData = document.querySelector("form")
const taskName = document.querySelector(".task_name")
const rightInner = document.querySelector(".right_inner")


myData.addEventListener("submit", (e) => {
    e.preventDefault()
    const taskItem = document.createElement("div")
    taskItem.classList.add("task")

    const checkbox = createCheckBox()
    const taskLabel = createTaskLabel(taskName.value)
    const del = createDeleteBtn()

    taskItem.append(checkbox, taskLabel, del)
    rightInner.append(taskItem)
    
    handleChackBox(checkbox, taskLabel)
    handleDeleteBtn(del, checkbox, taskItem)

    taskName.value = ""
})


function createCheckBox () {
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    return checkbox
}

function createTaskLabel  (taskName)  {
    const taskLabel = document.createElement("label")
    taskLabel.innerText = taskName
    return taskLabel
}

function createDeleteBtn  () {
    const dltBtn = document.createElement("button")
    dltBtn.type = "button"
    dltBtn.textContent = "Remove"
    return dltBtn
}


function handleChackBox(checkbox, label){
    checkbox.addEventListener("change", () => {
        if(checkbox.checked){
            label.style.textDecoration = "line-through"
        } else {
            label.style.textDecoration = "none"
        }
    })

}


function handleDeleteBtn(delBtn, checkbox, taskItem){
    delBtn.addEventListener("click", () => {
        if(checkbox.checked){
            taskItem.remove()
        } else {
            alert("You must check the checkbox..!")
        }
    })
}
