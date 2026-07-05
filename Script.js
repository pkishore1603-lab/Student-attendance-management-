let form = document.getElementById("studentForm");

let table = document.getElementById("studentTable");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let id = document.getElementById("studentId").value;
    let reg = document.getElementById("regNo").value;
    let name = document.getElementById("studentName").value;
    let dept = document.getElementById("department").value;
    let year = document.getElementById("year").value;

    let row = table.insertRow();

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = reg;
    row.insertCell(2).innerHTML = name;
    row.insertCell(3).innerHTML = dept;
    row.insertCell(4).innerHTML = year;

    alert("Student Added Successfully");

    form.reset();

});
