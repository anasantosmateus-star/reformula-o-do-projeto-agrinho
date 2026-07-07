// =========================
// AGRO 2050 - SCRIPT
// =========================

const perguntas = [

{
pergunta:"1. Qual tecnologia ajuda a economizar água na agricultura?",

alternativas:[
"Irrigação Inteligente",
"Queimadas",
"Desmatamento",
"Desperdício de água"
],

correta:0,

explicacao:"A irrigação inteligente utiliza sensores para fornecer apenas a quantidade necessária de água."
},

{
pergunta:"2. O que faz um drone agrícola?",

alternativas:[
"Monitora as plantações",
"Polui o meio ambiente",
"Corta árvores",
"Substitui o agricultor"
],

correta:0,

explicacao:"Os drones monitoram a lavoura e ajudam na tomada de decisões."
},

{
pergunta:"3. Qual destas é uma energia renovável?",

alternativas:[
"Carvão",
"Petróleo",
"Energia Solar",
"Gasolina"
],

correta:2,

explicacao:"A energia solar é limpa e renovável."
},

{
pergunta:"4. O que significa sustentabilidade?",

alternativas:[
"Produzir preservando os recursos naturais",
"Consumir sem limites",
"Desmatar florestas",
"Gastar mais água"
],

correta:0,

explicacao:"Sustentabilidade é atender às necessidades atuais sem comprometer o futuro."
},

{
pergunta:"5. Qual prática ajuda o solo?",

alternativas:[
"Rotação de culturas",
"Queimadas",
"Desmatamento",
"Lixo no campo"
],

correta:0,

explicacao:"A rotação de culturas mantém o solo fértil."
},

{
pergunta:"6. O reflorestamento serve para:",

alternativas:[
"Recuperar áreas degradadas",
"Aumentar a poluição",
"Diminuir a biodiversidade",
"Secar rios"
],

correta:0,

explicacao:"O reflorestamento ajuda a recuperar o meio ambiente."
},

{
pergunta:"7. A Inteligência Artificial pode ajudar o agro:",

alternativas:[
"Analisando dados",
"Poluindo rios",
"Criando queimadas",
"Destruindo plantações"
],

correta:0,

explicacao:"A IA auxilia na previsão do clima e na produtividade."
},

{
pergunta:"8. Agricultura de precisão significa:",

alternativas:[
"Uso de tecnologia para produzir melhor",
"Plantar sem planejamento",
"Desmatar novas áreas",
"Usar mais agrotóxicos"
],

correta:0,

explicacao:"Ela utiliza GPS, sensores e softwares."
},

{
pergunta:"9. Como reduzir o desperdício de alimentos?",

alternativas:[
"Melhor armazenamento",
"Jogar alimentos fora",
"Produzir menos",
"Queimar colheitas"
],

correta:0,

explicacao:"Um bom armazenamento reduz perdas."
},

{
pergunta:"10. O tema Agro Forte busca:",

alternativas:[
"Produzir com sustentabilidade",
"Desmatar mais",
"Consumir mais água",
"Poluir o ambiente"
],

correta:0,

explicacao:"O futuro do agro depende da sustentabilidade."
}

];

let indice = 0;
let pontos = 0;
let nome = "";

const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const btnComecar = document.getElementById("btnComecar");
const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const mensagem = document.getElementById("mensagem");
const progresso = document.getElementById("progresso");
const contador = document.getElementById("contador");
const proxima = document.getElementById("proxima");

btnComecar.addEventListener("click", iniciar);

function iniciar(){

nome = document.getElementById("nome").value.trim();

if(nome===""){

alert("Digite seu nome.");

return;

}

inicio.style.display="none";
quiz.style.display="block";

document.getElementById("boasVindas").innerHTML=
"Bem-vindo(a), <strong>"+nome+"</strong>!";

mostrarPergunta();

}

function mostrarPergunta(){

const atual = perguntas[indice];

pergunta.innerHTML="<h2>"+atual.pergunta+"</h2>";

alternativas.innerHTML="";

mensagem.innerHTML="";

proxima.style.display="none";

contador.innerHTML="Pergunta "+(indice+1)+" de "+perguntas.length;

progresso.style.width=((indice)/perguntas.length)*100+"%";

atual.alternativas.forEach((alt,pos)=>{

const botao=document.createElement("button");

botao.innerHTML=alt;

botao.onclick=function(){

verificarResposta(pos);

};

alternativas.appendChild(botao);

});

}

function verificarResposta(resposta){

const atual=perguntas[indice];

const botoes=alternativas.querySelectorAll("button");

botoes.forEach(btn=>btn.disabled=true);

if(resposta===atual.correta){

pontos++;

mensagem.innerHTML="✅ Correto!<br><br>"+atual.explicacao;

mensagem.style.color="green";

}else{

mensagem.innerHTML="❌ Resposta incorreta.<br><br>"+atual.explicacao;

mensagem.style.color="red";

}

proxima.style.display="inline-block";

}

proxima.addEventListener("click",()=>{

indice++;

if(indice<perguntas.length){

mostrarPergunta();

}else{

finalizar();

}

});

function finalizar(){

progresso.style.width="100%";

pergunta.style.display="none";
alternativas.style.display="none";
mensagem.style.display="none";
proxima.style.display="none";
contador.style.display="none";

document.getElementById("pontos").innerHTML=
"<h2>Você acertou "+pontos+" de "+perguntas.length+" perguntas.</h2>";

document.getElementById("nomeCertificado").innerHTML=
"<strong>"+nome+"</strong>";

}

document.getElementById("reiniciar").addEventListener("click",()=>{

location.reload();

});
