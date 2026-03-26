const form = document.getElementById("form-agendamento");
const lista = document.getElementById("lista");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const cliente = document.getElementById("cliente").value;
  const pet = document.getElementById("pet").value;
  const data = document.getElementById("data").value;

  const item = document.createElement("li");
  item.textContent = `${cliente} - ${pet} - ${data}`;

  lista.appendChild(item);

  form.reset();
});