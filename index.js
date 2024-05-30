var items = ["item 3", "item 4", "item 5", "item 6"];

var list = document.querySelector("#myList");

items.forEach(function (item) {
    createItems(item);
});

var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var li = this.parentElement;
        li.style.display = "none";
    }
};

list.addEventListener("click", function (item) {

    if (item.target.tagName == "LI") {
        item.target.classList.toggle("checked");
        TOOGLEDELETEBUTTON();
    }
});

document.querySelector("#deleteAll").onclick = function () {
    var elements = document.querySelectorAll(".list-group-item.checked");
    // console.log(elements);
    elements.forEach((item) => {
        item.style.display = "none";
    });
};

function TOOGLEDELETEBUTTON() {
    var checkList = document.querySelectorAll(".list-group-item.checked");
    // console.log(checkList.length);

    if (checkList.length > 0) {
        document.querySelector("#deleteAll").classList.remove("d-none");
    }
    else {
        document.querySelector("#deleteAll").classList.add("d-none");
    }
};

document.querySelector("#btnCreate").onclick = function () {
    var item = document.querySelector("#textItem").value;
    // console.log(item)

    if (item === "") {
        alert("Zəhmət olmasa bir dəyər daxil edin");
        return;
    }
    createItems(item);
}

function createItems(item) {
    var li = document.createElement('li');
    var text = document.createTextNode(item);

    li.className = "list-group-item";
    li.appendChild(text);

    list.appendChild(li);

    var span = document.createElement("span");
    var textTwo = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(textTwo);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var li = this.parentElement;
            li.style.display = "none";
            li.classList.remove("checked");
        }
    }
};