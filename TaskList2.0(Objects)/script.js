const taskInput = document.querySelector(`#taskInput`);
const addTask = document.querySelector(`#addTask`);
const taskList = document.querySelector(`#taskList`);

const tasks = [

];

function newTask(text) {
    tasks.push({
        id: tasks.length + 1,
        text: text,
        completed: false,
    })
};

function inputNormaliser() {
    return taskInput.value.trim();
};

function renderTasks() {
    taskList.innerText = ``;
    for (let i = 0; i < tasks.length; i++){
        const li = document.createElement(`li`);
        li.setAttribute(`id`, `li${tasks[i].id}`)
        li.innerText = `${tasks[i].text}`;
        
        const delBtn = document.createElement(`button`);
        delBtn.innerText = `Delete`;
        delBtn.setAttribute(`id`, `btn${tasks[i].id}`);
        delBtn.addEventListener(`click`, (e) => {
            console.log(`deleting`);
        });

        taskList.appendChild(li);
        li.appendChild(delBtn);
    };
};

addTask.addEventListener(`click`, () => {
    inputNormaliser();
    if (inputNormaliser() !== ``) {
        newTask(inputNormaliser());
        console.table(tasks);
    };
    taskInput.value = ``;
    renderTasks();
});



