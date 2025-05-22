const form = document.getElementById("dataForm");
const downloadBtn = document.getElementById("downloadBtn");
const dados = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const entrada = {
    Nome: formData.get("nome"),
    Idade: formData.get("idade"),
    Email: formData.get("email"),
  };
  dados.push(entrada);
  form.reset();
  alert("Dados adicionados!");
});

downloadBtn.addEventListener("click", function () {
  if (dados.length === 0) {
    alert("Nenhum dado para exportar.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(dados);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");

  XLSX.writeFile(workbook, "dados.xlsx");
});
