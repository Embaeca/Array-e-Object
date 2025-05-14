// // Arrays

// let arrays = [];
// arrays[0] = 1;
// arrays[1] = 2;
// arrays[2] = 3;
// arrays[3] = 4;
// for (let i = 0; i < arrays.length; i++) {
//   console.log(arrays[i]);
// }

// // Bloco

// let bloc = {
//   nome: "Emnuel",
//   idade: 18,
// };
// console.log(`Forma bruta`);
// console.log(bloc);

// console.log("\n" + bloc.nome);
// console.log(bloc.idade);

// Array com Bloco
// {
//   let arrbloc = [
//     {
//         nome: "Emanuel",
//         idade: 18
//     },
//     {
//         nome: "Alguem",
//         idade: 18
//     }
//   ];
//   console.log(arrbloc[0])
//   console.log(arrbloc[1])
//   for(let i = 0; i < arrbloc.length; i++){
//     console.log(`\nNome: ${arrbloc[i].nome}\nIdade: ${arrbloc[i].idade}`)
//   }
// }
{
  let arrbloc = [];
  let cont = 0;

  function enviardados() {
    let nome = document.querySelector(".name").value;
    let idade = Number(document.querySelector(".idade").value);

    if (nome == "") {
      alert("Por favor, preencha seu nome!!");
    } else if (idade == "") {
      alert("Por favor preencha sua idade!!");
    } else {
      if (isNaN(idade)) {
        alert("Por favor, digite um número!!");
      } else {
        let dados = {
          nome: nome,
          idade: idade,
        };

        arrbloc.push(dados);

        additem(idade, nome);

        cont++;

        document.querySelector(".name").value = "";
        document.querySelector(".idade").value = "";
      }
    }
  }

  function additem(idade, nome) {
    let novoitem = document.createElement("li");
    novoitem.innerHTML = `Nome: ${nome} | Idade: ${idade}`;
    document.querySelector(".list").appendChild(novoitem);
  }

  function verarray() {
    for (let i = 0; i < arrbloc.length; i++) {
      alert(`Nome: ${arrbloc[i].nome} Idade: ${arrbloc[i].idade}`);
    }
  }
}
