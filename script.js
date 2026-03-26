const form = document.getElementById("form-agendamento");
const lista = document.getElementById("lista");

// carregar dados salvos
let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

function renderizar() {
  lista.innerHTML = "";

  agendamentos.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.cliente} - ${item.pet} - ${item.data}`;

    // botão excluir
    const btn = document.createElement("button");
    btn.textContent = "Excluir";
    btn.onclick = () => {
      agendamentos.splice(index, 1);
      salvar();
    };

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

function salvar() {
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  renderizar();
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const cliente = document.getElementById("cliente").value;
  const pet = document.getElementById("pet").value;
  const data = document.getElementById("data").value;

  agendamentos.push({ cliente, pet, data });

  salvar();
  form.reset();
});

renderizar();
