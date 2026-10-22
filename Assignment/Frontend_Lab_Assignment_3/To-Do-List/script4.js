function addTask() {
var task = document.getElementById("task").value;


if (task == "") {
    alert("Please enter a task");
} else {
    var li = document.createElement("li");

    li.innerHTML = task;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("task").value = "";
}


}
