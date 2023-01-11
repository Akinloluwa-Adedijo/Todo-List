const addTodoButton = document.querySelector(".addTodoButton");
const inputField = document.querySelector("#addTodo");

addTodoButton.addEventListener("click", () => {
  if (inputField.value !== "") {
    console.log(inputField.value);
  }
});
