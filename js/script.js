console.log('Estou programando')
const btnAdd = document.querySelector('#btn-add')
const inputTodo = document.querySelector('#input-todo')

btnAdd.addEventListener('click',()=>{
    console.log(inputTodo.value) 
    addTodoElement(inputTodo.value)
    clearInput(inputTodo)
})

const clearInput = (element) => {
    element.value = ''
}

const addTodoElement = (name) => {
    todoListElements = document.querySelectorAll('#todo-list li') 
    id = todoListElements.length +1
    todoList = document.querySelector('#todo-list')
    todoList.innerHTML= todoList.innerHTML + `<li>
    <input type="checkbox" id="${id}">
    <label for="${id}"> ${name}</label>
</li>` 
}
