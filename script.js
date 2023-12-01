let dados = [];
let neyma

function TudoSalvo(){
if (localStorage.Tbl) {
      dados=JSON.parse(localStorage.getItem('Tbl'));
      listarTabela();
}
}


TudoSalvo();
function add() {
    
  if (document.getElementById('po').value === 'Adicionar'){
    
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let idade = document.getElementById('idade').value;
    dados.push({ nome, sobrenome, idade });
    listarTabela();} else{
    SalvarEdit(neyma);}

   
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('idade').value = '';

}
function listarTabela() {
    let content = "";
    for (let index = 0; index < dados.length; index++) {

        content = content + `
<tr>
<td>${index}</td>
<td>${dados[index].nome}</td>
<td>${dados[index].sobrenome}</td>
<td>${dados[index].idade}</td>
<td>
<button class="btn" onclick="Anteditar(${index})">Editar</button>
<button class="btn" onclick="apagar(${index})">Apagar</button>
</td>
</tr>
`;
    }
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = content;
}
function apagar(index) {
    if (confirm("deseja mesmo apagar a linha ", index) === true) {

dados.splice(index, 1);

 listarTabela();
alert(`linha ${index} deletada`);

    } else {
alert('função "apagar" cancelada');
        
    };

}
function Anteditar(index) {
document.getElementById('top').innerHTML = 'Edite aqui:'
    document.getElementById('po').value = 'Salvar';


document.getElementById('nome').value = dados[index].nome;
document.getElementById('sobrenome').value = dados[index].sobrenome;
document.getElementById('idade').value = dados[index].idade;
neyma = index;
}
function SalvarEdit(neyma){
    dados[neyma].nome = document.getElementById('nome').value;
    dados[neyma].sobrenome = document.getElementById('sobrenome').value;
    dados[neyma].idade = document.getElementById('idade').value;
   listarTabela();

    document.getElementById('po').value = 'Adicionar';
    document.getElementById('top').innerHTML='Adicione aqui:';
    
}
function SalvaTudo(){
let bgl=JSON.stringify(dados);
localStorage.setItem("Tbl",bgl)
}

function cler(){
localStorage.clear()
dados=JSON.parse(localStorage.getItem('Tbl'));
      listarTabela();
}