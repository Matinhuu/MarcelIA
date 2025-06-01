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
export async function apresentacao(){
console.log(`Olá sou MarcelIA`);
await sleep(500);
console.log(`Sua assistente virtual de viagens da VoeLivre`);
await sleep(500);
}

export async function escolhas() {
  let escolha = Number(ler());
  return escolha;
}

export async function menu(){
let repeticao = true
while (repeticao) {
  console.log(`Qual seria seu destino: `);
  await sleep(800);
  console.log('1. Bertioga');
  await sleep(300);
  console.log('2. Santos');
  await sleep(300);
  console.log('3. Ubatuba');
  await sleep(300);
  console.log('4. Guaruja');
  await sleep(300);
  console.log('5. Ilhabela');
  await sleep(300);
  console.log('6. São Sebastião');
  await sleep(300);
  console.log('7. Maragogi');
  await sleep(300);
  console.log('0. Sair');
  funcao.escolhas()
}
}

export async function viagens(escolhas) {
  let respostas;
  if (escolhas == 1) {
    respostas = "Para Bertioga temos os seguintes planos de viagens:" 
    console.log(geromel)
  }
}
function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }