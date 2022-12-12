const newTodo = "new";
const listTodo = "list";
const deleteTodo = "delete";
const quitTodo = "quit";
let newTodoArray = [];

// const listContainer = document.getElementById("listContainer");
// const ul = document.createElement("ul");
// const buttonListItem = document.getElementById("listItemButton");
// const arrayItems = document.getElementById("arrayItems");

function startTodoApp() {
	let checkPrompt = prompt("What would you like to do?").toLowerCase();

	while (checkPrompt !== quitTodo) {
		if (checkPrompt === newTodo) {
			let checkNewTodo = prompt("Name your new Task");
			while (!checkNewTodo) {
				checkNewTodo = prompt("Enter an actual value");
			}
			newTodoArray.push(checkNewTodo);
			checkPrompt = prompt("What would you like to do?").toLowerCase();
		} else if (checkPrompt === listTodo) {
			for (let listItem of newTodoArray) {
				console.log(listItem);
			}
			checkPrompt = prompt("What would you like to do?").toLowerCase();
		} else if (checkPrompt === deleteTodo) {
			let deleteItem = parseInt(prompt("Which item would you like to delete?"));
			const index = newTodoArray.indexOf(deleteItem);
			newTodoArray.splice(index, 1);
			console.log(newTodoArray);
			checkPrompt = prompt("What would you like to do?").toLowerCase();
		}
	}
}

// function showTheList() {
// 	if (newTodoArray.length === 0) {
// 		alert(`the array has ${newTodoArray.length} entries`);
// 	} else if (buttonListItem.innerHTML === "Hide current Todo List!") {
// 		const li = document.getElementById("listArrayItems");
// 		let fc = li.firstChild;
// 		while (fc) {
// 			li.removeChild(fc);
// 			fc = li.firstChild;
// 		}
// 		buttonListItem.innerHTML = "Show current Todo List!";
// 	} else {
// 		buttonListItem.innerHTML = "Hide current Todo List!";
// 		for (let listItem of newTodoArray) {
// 			const li = document.createElement("li");
// 			console.log(listItem);
// 			ul.setAttribute("id", "arrayItems");
// 			li.setAttribute("id", "listArrayItems");
// 			li.innerHTML = listItem;
// 			ul.appendChild(li);
// 		}
// 		listContainer.appendChild(ul);
// 	}
// }
