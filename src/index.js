import "./styles.css";

const app = document.getElementById("app");
const button = document.createElement("div");
const roundButtonContainer = document.createElement("div");
const roundButton1 = document.createElement("div");
const roundButton2 = document.createElement("div");
const roundButton3 = document.createElement("div");

button.setAttribute("class", "button");
button.innerHTML = "Button";

roundButtonContainer.setAttribute("class", "round-button-container");
roundButton1.setAttribute("class", "round-button-1");
roundButton2.setAttribute("class", "round-button-2");
roundButton3.setAttribute("class", "round-button-3");

app.append(button);
roundButtonContainer.append(roundButton1);
roundButtonContainer.append(roundButton2);
roundButtonContainer.append(roundButton3);
app.append(roundButtonContainer);
