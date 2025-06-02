function TodoList({todos,deleteTodo}) {
  return (
    <div>
      <ul>
        {todos.map((todo)=>
        <li key={todo._id}>{todo.text}
            <button onClick={()=>deleteTodo(todo._id)}>Delete</button>
        </li>
        )}
      </ul>
    </div>
  )
}

export default TodoList;
