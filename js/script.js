console.log('Estou programando')
const btnAdd = document.querySelector('#btn-add')
const inputTodo = document.querySelector('#input-todo')
const todoList = document.querySelector('#todo-list')

window.addEventListener('load', ()=>{
    renderTodoList()
})

todoList.addEventListener('click',(e)=>{
    console.log(e)
    if(e.target.nodeName == 'INPUT'){
        isChecked = e.target.checked

        id = e.target.getAttribute('id').replace('item-', '')
        list = getTodoList()
        list[id] = {name: list[id].name, checked: isChecked}
        updateTodoList(list)
    }
})

btnAdd.addEventListener('click',()=>{ 
    inputValue = inputTodo.value
    if(inputValue === ""){
        alert('Digitar o nome da tarefa')
    }
    else{
        addTodoElement(inputValue)
        renderTodoList()
    }

})

const clearInput = (element) => {
    element.value = ''
}

const addTodoElement = (name) => { 
    localStorage.setItem('todolist', JSON.stringify([...getTodoList(), {name,checked:false}]))
}

const updateTodoList = (list) => {
    localStorage.setItem('todolist', JSON.parse(list))
}

const getTodoList = () => localStorage.getItem('todolist') === null ? [] : JSON.parse(localStorage.getItem('todolist'))

const renderTodoList = () => {
    list = getTodoList()
    todoList.innerHTML = list.reduce((acc,item,index) => acc + `
    <li>
        <input type='checkbox' id='item-${index}' ${item.checked && 'checked'}/>
        <label for='item-${index}'> ${item.name} </label>
        <button data-js='btn-remove-${index}'> </button>
    </li>
    `, '')
}

