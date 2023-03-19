const input = document.getElementById('input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = " "
        return false
    } else {
    const div =document.createElement("div")
    const text = document.createElement('h3')
    const deletes = document.createElement('button')
    const edit = document.createElement('button')
  
    div.setAttribute('class', "block_text")
    text.innerHTML = input.value

    div.append(text)
    todoList.prepend(div)
    input.value = ''

    deletes.className = 'delete'
    deletes.textContent = 'delete'
    div.append(deletes)
    deletes.addEventListener('click', (e) => {
        div.remove()
    })

    edit.className = 'edit'
    edit.textContent = 'edit'
    div.append(edit)
    edit.addEventListener('click', (e) => {
        text.innerHTML = prompt('Изменить задачу')
    })
    }
}
createButton.addEventListener('click', createTodo)