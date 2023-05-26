
function updateTableData() {
    const task = JSON.parse(localStorage.getItem("task"))

    const tabledata = document.getElementById("tabledata");
    tabledata.innerHTML = "";

    for (let i = 0; i < task.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${task[i].name}</td>
            <td>${task[i].mail_id}</td>
            <td>${task[i].appDate}</td>
            <td>${task[i].frtime}</td>
            <td>${task[i].time}</td>
            <td>${task[i].Despvalue}</td>`

        tabledata.appendChild(row);
    }

}
