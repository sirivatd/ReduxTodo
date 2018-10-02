
function allTodos(state){
  let keys = [];
  keys = Object.keys(state.todos).map((key) => key);
  let todos = keys.map((key) => state.todos[key] );
  return todos;
}

export default allTodos;
