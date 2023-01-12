

//get All Tasks
const getAllTasks = () => {
    return localStorage.getItem('tasks');
}
// let tasks = "a,bvv,cc";

//add new task
const addTask = (task) => {
    if (!getAllTasks()) {
        localStorage.setItem('tasks', JSON.stringify([{ id: 1, name: task, status: 'pending' }]));
    } else {
        let newList = getAllTasks();

        localStorage.setItem('tasks', JSON.stringify([...JSON.parse(newList), { id: JSON.parse(newList).length + 1, name: task, status: "pending" }]))
    }
    initialize();
}

//initialize app
const initialize = () => {

    let tasks_ul = document.querySelector('.tasks');
    //split tasks into tab tasks
    tasks_ul.innerHTML = '';
    let tasks_tab;
    if (getAllTasks()) {
        tasks_tab = [JSON.parse(getAllTasks())][0];
        console.log(tasks_tab);
        tasks_tab.map((item, index) => tasks_ul.innerHTML += `<li class='task ${item?.status}' id="checkbox-${item?.id}"><input type="checkbox" name="checkbox-${item?.id}"  class="checkbox" ${item?.status == 'completed' ? checked = "checked" : ''}/>
        ${item?.name}-${item?.status}</li>`)
    } else {
        localStorage.setItem('tasks', '');
        tasks_tab = [];
    }
    // console.log(tasks_tab.toString());
    // console.log(JSON.stringify(tasks_tab.toString()));
    // console.log(JSON.stringify(tasks_tab[0]))
}
let btn_addTask = document.getElementById('btn-addTask');
let input_task = document.getElementById('input-task');


btn_addTask.addEventListener('click', () => addTask(input_task.value))

initialize();

let checkboxes = document.querySelectorAll('.checkbox');


//change task status
const completeTask = (id) => {

    localStorage.setItem('tasks', JSON.stringify(JSON.parse(getAllTasks()).map(item => { if (item.id == id) { return { id: item.id, name: item.name, status: 'completed' } } else { return item } })))

}
const pendingTask = (id) => {

    localStorage.setItem('tasks', JSON.stringify(JSON.parse(getAllTasks()).map(item => { if (item.id == id) { return { id: item.id, name: item.name, status: 'pending' } } else { return item } })))

}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        let li = document.getElementById(e.target.name);
        if (e.target.checked == true) {
            completeTask(e.target.name.substring(9))
        }
        else {
            pendingTask(e.target.name.substring(9));
        }

        li.classList.toggle('completed');

    })
})