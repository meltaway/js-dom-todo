class Todo {
    constructor(obj) {
        this.node = obj;
        this.title = obj.querySelector('.title');
        this.desc = obj.querySelector('.description');
        this.checkbox = obj.querySelector('input[type=checkbox]');
        this.checkboxEvent(this.checkbox);
    }

    checkboxEvent(checkbox) {
        checkbox.addEventListener('click', (e) => {
            if (e.target.checked) {
                this.title.classList.add('strikethrough');
                this.desc.classList.add('strikethrough');
            }
            else if (!e.target.checked) {
                this.title.classList.remove('strikethrough');
                this.desc.classList.remove('strikethrough');
            }
        })
    }
}

function createTodoListNode(title, desc) {
    const todo = document.createElement('div');
    todo.className = 'todo blue-grey lighten-5 blue-grey-text text-darken-4';

    const div = document.createElement('div');
    div.className = 'todo-text-content';
    const label = document.createElement('label');
    label.className = 'done-checkbox';
    const input = document.createElement('input');
    input.className = 'filled-in checkbox-orange';
    input.type = 'checkbox';
    const span = document.createElement('span');

    label.appendChild(input);
    label.appendChild(span);
    div.appendChild(label);

    const titleElem = createPElement(title, 'title');
    this.title = titleElem;
    div.appendChild(titleElem);

    const a = document.createElement('a');
    a.className = 'delete waves-effect btn-flat';
    const iDelete = document.createElement('i');
    iDelete.className = 'material-icons';
    iDelete.textContent = 'delete';
    a.appendChild(iDelete);
    div.appendChild(a);

    const descElem = createPElement(desc, 'description');
    this.desc = descElem;

    todo.appendChild(div);
    todo.appendChild(descElem);

    return todo;
}

function createPElement(text, className) {
    const elem = document.createElement('p');
    elem.textContent = text;
    elem.className = className;
    return elem;
}

function addTodo() {
    const title = prompt('Please enter your task title');
    const desc = prompt('Please enter your task description');

    if (title.length !== 0 || desc.length !== 0) {
        const todo = new Todo(createTodoListNode(title, desc));
        const list = document.querySelector('.todo-list');
        list.appendChild(todo.node);
    } else
        alert('ty debil');
}

const addTodoButton = document.getElementById('add');
addTodoButton.addEventListener('click', addTodo);

//initialize first task
const todo = new Todo(createTodoListNode('task', 'I am a very simple card. I am good at containing small bits ' +
    'of information. I am convenient because I require little markup to use effectively.'));
const todos = document.querySelector('.todo-list');
todos.appendChild(todo.node);
