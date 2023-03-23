// shoe result by serial
let serial = 0;

function result(title, areaResult) {

    serial = serial + 1;
    const tableBody = document.getElementById("table-body-result");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${title}</td>
        <td><span id="cmResult">${areaResult}</span>cm<sup>2</sup></td>
        <td><button class="btn btn-primary">Convert to m<sup>2</sup></button></td>
    `;
    tableBody.appendChild(tr);
}

