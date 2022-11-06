const addTodos = document.querySelector('.add-todos');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search-bar>input');

//Add todos
const generateTemplate = todo => {
    const html = `<li>${todo.toLowerCase()}<i class="fa-solid fa-trash-can"></i></li>`;
    todos.innerHTML += html;
};

addTodos.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodos.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addTodos.reset();
    }
});

//Delete todos
todos.addEventListener('click', e => {
    if(e.target.classList.contains('fa-trash-can')){
        e.target.parentElement.remove();
    }
});

//Filter on search
const filterTodos = val => {
    //Filtered elements which dodnt contain searched keyword and add "filtered" class to them
    Array.from(todos.children)
    .filter(todo => !todo.textContent.includes(val))
    .forEach(todo => todo.classList.add('d-none'));
    
    //Filtered elements which contain searched keyword remove "filtered" class to them
    Array.from(todos.children)
        .filter(todo => todo.textContent.includes(val))
        .forEach(todo => todo.classList.remove('d-none'));
    //display-none for li tags which contain "filtered" class 
};

search.addEventListener('keyup', () => {
    const todo = search.value.trim().toLowerCase(); //trim spaces at beginning and convert to lower case
    filterTodos(todo);
}); 