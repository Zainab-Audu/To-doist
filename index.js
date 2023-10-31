// Utility function
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

//TODO: CRUD FUNCTIONS

// CREATE TODO Function
/*1. Get todo
/*2. Add todo local storage 
    */
const DB_NAME = "todo_db";
const createTodo = () => {
  const todoInput = document.querySelector("#todo-input");

  const newTodo = {
    id: uuid(),
    title: todoInput.value,
    created_at: Date.now(),
  };

  // check for ls
  const todo_db = localStorage.getItem("todo_db") || [];
  // add new todo db array
  const new_todo_db = [...todo_db, newtodo];

  // add to local storage
  local.setItem(DB_NAME, JSON.stringify(new_todo_db));
};

// READ TODO FUNCTION
// Update TODO FUNCTION
// DELETE TODO FUNCTION
