//array to hold all task objects
var tasks = [];

//enum object for tasks
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//task constructor function
function Task(id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

//function to create and add a task element to the DOM
function addTaskElement(task){
    //create a new list item for the task
    var taskItem = document.createElement('li');
    //set the id of the element for reference later
    taskItem.id = task.id;
    //set the task name as the content of the element
    taskItem.textContent = task.name;
    //append the new task item to the active list (ordered list)
    document.getElementById('active-list').appendChild(taskItem);
}

//function to add a new task based on user input
function addTask(event){
    //retrieve the user input from the input field
    var input = document.getElementById('input-task');
    var taskName = input.value.trim();

    //ensure that task name was provided
    if (taskName === ' '){
        alert ('Please enter a task');
        return;
    }

    //create a unique id for the task using the task array length
    var taskId = 'task-' + tasks.length;

    //create a new task object with provided name and active status
    var newTask = new Task(taskId, taskName, taskStatus.active);

    //store the new task in the tasks array
    tasks.push(newTask);

    addTaskElement(newTask);

    //clear the input field for the next task
    input.value = ' ';
}

//function to mark a task as completed when clicked
function completedTask(event){
    //ensure that a list item was clicked
    var clickedElement = event.target;
    if(clickedElement.tagName.toLowerCase() !== 'li'){
        return;
    }

    //retrieve the task id from the clicked element
    var taskId = clickedElement.id;

    //find the corresponding task in the tasks array
    var task = tasks.find(function(t){
        return t.id === taskId;
    });

    //if the task was found and is still active change it's status
    if(task && task.status === taskStatus.active){
        task.status = taskStatus.completed;

        //remove the task element from the active list
        var activeList = document.getElementById('active-list');
        activeList.removeChild(clickedElement);

        //append the task element to the completed list (unordered list)
        document.getElementById('completed-list').appendChild(clickedElement);
    }
}

//initialization function to wire up event listeners
function init(){
    //wire the add task function to the click event of the add task button
    document.getElementById('add-task').addEventListener('click', addTask);

    //wire the completed task function to clicks on the active task list for marking tasks complete
    document.getElementById('active-list').addEventListener('click', completedTask);
}

//initialize the app once the document's content is fully loaded
document.addEventListener('DOMContentLoaded', init);