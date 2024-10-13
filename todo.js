const ulEl = document.querySelector("ul");
const liEl = document.querySelector("li");
const inputEl = document.querySelector("#input-text");
const addBtnEl = document.querySelector("#add-button");

let editTodo = null;


addBtnEl.addEventListener('click', function() {
    const inputTextEl = inputEl.value.trim();
    if(inputTextEl.length <= 0) {
        alert("Please add your todo first")
        return false
    }
    if(addBtnEl.value === "Edit") {
        editTodo.target.previousElementSibling.textContent = inputTextEl;
        addBtnEl.value = "Add";
        inputEl.value = "";
    }
    else {
        const newLiEl = document.createElement("li");
        const pEl = document.createElement("p");
        pEl.innerHTML = inputTextEl;
        newLiEl.appendChild(pEl);

        const editBtnEl = document.createElement("button");
        editBtnEl.textContent = "Edit";
        editBtnEl.classList.add("btn", "editBtn");
        newLiEl.appendChild(editBtnEl);

        const deleteBtnEl = document.createElement("button");
        deleteBtnEl.textContent = "Remove";
        deleteBtnEl.classList.add("btn", "deleteBtn");
        newLiEl.appendChild(deleteBtnEl);


        ulEl.appendChild(newLiEl);
        inputEl.value = '';
    }

});

ulEl.addEventListener("click", function(e) {
    if(e.target.textContent === "Remove") {
        ulEl.removeChild(e.target.parentElement);
    }

    if(e.target.textContent === "Edit") {
        inputEl.value = e.target.previousElementSibling.textContent;;
        inputEl.focus();
        addBtnEl.value = "Edit"
        editTodo = e;
    }
})