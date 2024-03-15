function agregarContacto() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let account = document.getElementById("account").value;

    let table = document.getElementById("contactTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    let dataName = newRow.insertCell(0);
    let dataMail = newRow.insertCell(1);
    let dataCount = newRow.insertCell(2);
    dataName.innerHTML = name;
    dataMail.innerHTML = email;
    dataCount.innerHTML = account;

    // Limpiar los campos después de agregar el contacto
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("account").value = "";
}