var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null)
    insertNewRecord(formData);
  else
    updateRecord(formData);

  resetForm();
}

function readFormData() {

  var formData = {};
  formData["tarefa"] = document.getElementById("txtTarefa").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("listaTarefas").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.tarefa;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = `<a onClick="onEdit(this)">Editar</a> 
                     <a onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
  document.getElementById("txtTarefa").value = "";
  selectedRow = null;

}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("txtTarefa").value = selectedRow.cells[0].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.tarefa;
}

function onDelete(td) {
  if (confirm('Deseja deletar ?')) {
    row = td.parentElement.parentElement;
    document.getElementById("listaTarefas").deleteRow(row.rowIndex);
    resetForm();
  }

}