const form = document.getElementById('add-todo')
const input = form.querySelector('input')
const todoList = document.getElementById('todo-list')

form.onsubmit = e => {
  e.preventDefault()
  
  const todoText = input.value.trim()
  
  if (todoText) {
    const li = document.createElement('li')
    const button = document.createElement('button')
    
    button.textContent = todoText
    
    li.appendChild(button)
    
    button.onclick = () => {
      if (button.style.textDecoration === 'line-through') {
        li.remove()
      } else {
        button.style.textDecoration = 'line-through'
      }
    }
    
    todoList.appendChild(li)
    
    input.value = ''
  }
}
