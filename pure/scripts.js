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
    div.appendChild(titleElem);

    const a = document.createElement('a');
    a.className = 'delete waves-effect btn-flat';
    const iDelete = document.createElement('i');
    iDelete.className = 'material-icons';
    iDelete.textContent = 'delete';
    a.appendChild(iDelete);
    div.appendChild(a);

    const descElem = createPElement(desc, 'description');

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

function createHtmlList() {
    const wrapper = document.createElement('div');
    wrapper.className = 'todo-list';
    wrapper.id = 'todo-list';

    const container = document.querySelector('.todo-container');
    container.appendChild(wrapper);

    return wrapper;
}

function createAddBtn() {
    const a = document.createElement('a');
    a.className = 'btn-floating btn-large waves-effect waves-light blue-grey lighten-1';
    a.id = 'add';

    const icon = document.createElement('i');
    icon.className = 'material-icons';
    icon.textContent = 'add';
    a.appendChild(icon);

    const container = document.querySelector('.todo-container');
    container.appendChild(a);

    return a;
}

class Todo {
    constructor(obj) {
        this.node = obj;
        this.title = obj.querySelector('.title');
        this.desc = obj.querySelector('.description');
        this.checkbox = obj.querySelector('input[type=checkbox]');
        this.checkboxEvent(this.checkbox);
        this.deleteBtn = obj.querySelector('.delete');
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

class TodoList {
    constructor() {
        this.list = createHtmlList();
        this.children = [];
        this.addBtn = createAddBtn();
        this.addBtnEvent();
    }

    appendTodo(todo) {
        this.list.appendChild(todo.node);
        this.deleteBtnEvent(todo);
        this.children.push(todo);
    }

    addBtnEvent() {
        this.addBtn.addEventListener('click', (e) => {
            const title = prompt('Please enter your task title');
            const desc = prompt('Please enter your task description');

            if (title.length !== 0 || desc.length !== 0) {
                const todo = new Todo(createTodoListNode(title, desc));
                this.appendTodo(todo);
                return todo;
            } else
                return null;
        });
    }

    deleteBtnEvent(todo) {
        todo.deleteBtn.addEventListener('click', (e) => this.removeTodo(todo));
    }

    removeTodo(todo) {
        this.list.removeChild(todo.node);
        const i = this.children.indexOf(todo);
        this.children.splice(i, 1);
    }
}

// const addTodoButton = document.getElementById('add');
// addTodoButton.addEventListener('click', addTodo);

//initialize first task
const todo = new Todo(createTodoListNode('task', 'I am a very simple card. I am good at containing small bits ' +
    'of information. I am convenient because I require little markup to use effectively.'));

const todolist = new TodoList();
todolist.appendTodo(todo);
