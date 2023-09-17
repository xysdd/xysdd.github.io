function make_table(table) {
    let tbody = table.children[0]
    let letter_row = tbody.children[0];
    let number_row = tbody.children[1];
    for (let i = 0; i < 26; i++) {
        let letter_cell = document.createElement("td");
        let number_cell = document.createElement("td");
        letter_cell.appendChild(document.createTextNode(String.fromCharCode(i + 65)));
        number_cell.appendChild(document.createTextNode(i + 1));
        letter_row.appendChild(letter_cell);
        number_row.appendChild(number_cell);
    }
}

make_table(document.getElementById("alphabet"));
