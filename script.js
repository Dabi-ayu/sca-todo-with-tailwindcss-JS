let taskCounter = 0;
let doneCounter = 0;

const container = document.getElementById("container");

const tasksDiv = document.createElement("div");
const tasksHeading = document.createElement("h2");
tasksHeading.style.color = "white";
tasksHeading.style.marginTop = "10px";
tasksDiv.appendChild(tasksHeading);
container.appendChild(tasksDiv);

const doneDiv = document.createElement("div");
const doneHeading = document.createElement("h2");
doneHeading.style.color = "white";
doneDiv.appendChild(doneHeading);
container.appendChild(doneDiv);

function createTask() {
  const inputValue = document.getElementById("input-field").value;
  document.getElementById("input-field").value = "";

  const containerTask = document.createElement("div");
  containerTask.style.marginTop = "10px";

  const newTask = document.createElement("div");

  const divImg = document.createElement("div");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const paragraph = document.createElement("p");

  img1.src = "./assets/check-mark-xl.png";
  img1.alt = "check-icon";
  img1.width = 18;
  span1.style.cursor = "pointer";
  span1.appendChild(img1);

  img2.src = "./assets/download.png";
  img2.alt = "check-icon";
  img2.width = 18;
  img2.style.marginLeft = "10px";
  span2.style.cursor = "pointer";
  span2.appendChild(img2);

  paragraph.textContent = inputValue;
  paragraph.style.width = 150;

  divImg.style.display = "flex";

  newTask.style.backgroundColor = "#15101C";
  newTask.style.borderRadius = "10px";
  newTask.style.padding = "15px";
  newTask.style.color = "#9E78CF";
  newTask.style.width = "500px";
  newTask.style.margin = "10px";
  newTask.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.1)";
  newTask.style.display = "flex";
  newTask.style.justifyContent = "space-between";

  divImg.appendChild(span1);
  divImg.appendChild(span2);
  newTask.appendChild(paragraph);
  newTask.appendChild(divImg);
  containerTask.appendChild(newTask);

  tasksDiv.appendChild(containerTask);

  span1.addEventListener("mouseenter", function () {
    span1.style.backgroundColor = "#2B114E";
  });

  span1.addEventListener("mouseleave", function () {
    span1.style.backgroundColor = "";
  });

  span2.addEventListener("mouseenter", function () {
    span2.style.backgroundColor = "#2B114E";
  });

  span2.addEventListener("mouseleave", function () {
    span2.style.backgroundColor = "";
  });

  span1.addEventListener("click", () => {
    containerTask.remove();

    const doneTask = document.createElement("div");
    const doneParagraph = document.createElement("p");
    const undo = document.createElement("img");
    undo.src = "./assets/undo-xxl.png";
      undo.alt = "check-icon";
      undo.style.cursor = "pointer"
    undo.width = 20;

    doneParagraph.textContent = inputValue;
    doneParagraph.style.color = "#58CFB0";
    doneParagraph.style.textDecoration = "line-through";

    doneTask.style.backgroundColor = "#15101C";
    doneTask.style.borderRadius = "10px";
    doneTask.style.padding = "15px";
    doneTask.style.color = "#9E78CF";
    doneTask.style.width = "500px";
    doneTask.style.margin = "10px";
    doneTask.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.1)";
    doneTask.style.display = "flex";
    doneTask.style.justifyContent = "space-between";

    doneTask.appendChild(doneParagraph);
    doneTask.appendChild(undo);

    doneDiv.appendChild(doneTask);
    doneCounter++;
    doneHeading.innerHTML = `Done - ${doneCounter}`;

    taskCounter--;
    tasksHeading.innerHTML = `Tasks - ${taskCounter}`;
  });

  span2.addEventListener("click", () => {
    containerTask.remove();
    taskCounter--;
    tasksHeading.innerHTML = `Tasks - ${taskCounter}`;
  });

  taskCounter++;
  tasksHeading.innerHTML = `Tasks - ${taskCounter}`;
}
