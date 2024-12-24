function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = "akong pinaskohan haha" + result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}
