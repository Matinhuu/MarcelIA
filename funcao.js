import prompt from 'prompt-sync'
let ler = prompt();
let geromel = `1. Bertioga
2. Santos 
3. Ubatuba
4. Guaruja
5. Ilhabela
6. São Sebastião
7. Maragogi
0. Sair`
// geromel serve para facilitar a digitalização do menu "console.log(geromel)"

export async function apresentacao(){
console.log(`Olá sou MarcelIA`);
await sleep(500);
console.log(`Sua assistente virtual de viagens da VoeLivre`);
await sleep(500);
}

export async function menu(){
let repeticao = true
console.log(`Qual o seu destino?`);
console.log(geromel);
}

export async function escolhas() {
  let escolha = Number(ler());
  return escolha;
}



export async function viagens(op) {
  let respostas;
  if (op == 1) {
    respostas = "Para Bertioga temos os seguintes planos de viagens:"
  }
}


function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }