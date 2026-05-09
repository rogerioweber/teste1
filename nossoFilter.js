/*Para criar um filtro, preciso de:
-Uma lista para ter o que procurar
-preciso de uma laço de repetição para percorrer a lista
-preciso de uma nova lista para colocar o valor que preciso esteja na lista, caso tenha
-preciso de uma funçao que compare o valor que preciso com o que tenha na lista
-e caso for valor igual tenha que retornar para a nova lista
*/

const lista = [5,3,5,4,7,8,9,9]

function nossoFilter(lista, funcaoFiltro) {
    let filtro = []
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if(funcaoFiltro(element)){
            filtro.push(element)
        }
    }

    return filtro
}

let filter = 5

console.log(nossoFilter(lista, (element) => {
    if(element === filter){
        return element
    }
}))




// const lista = [5,3,5,4,7,8,9,9]

// function nossoFilter(lista, funcaoFiltro) {
//     let filtro = []
//     for (let index = 0; index < lista.length; index++) {
//         const element = lista[index];
//         if(funcaoFiltro(element)){
//             filtro.push(element)
//         }
//     }

//     return filtro
// }

// let filter = 7

// function funcaoFiltrofora(element){
// 	if(element === filter){
//         return element
//     }
// }

// console.log(nossoFilter(lista, funcaoFiltrofora))
