

/*funções auxiliares */ 
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const abrirModal = () =>{
    seleciona('.pizzaWindowArea').style.opacity = 0
    seleciona('.pizzaWindowArea').style.display = 'flex'
    setInterval(() => {
        seleciona('.pizzaWindowArea').style.opacity = 1
    } , 150)
}


const fecharModal = () =>{
    seleciona('.pizzaInfo--cancelButton ').style.opacity = 0 
    setInterval(() => {
        seleciona('.pizzaWindowArea').style.display = 'none'
     } , 5000)
}

/*obotão fechar */
const botoesfechar = () => {
    selecionaTodos('.pizzaInfo--cancelButton , .pizzaInfo--cancelMobileButton ').forEach(item => {
        item.addEventListener('click' , fecharModal)
        
    });
} 


pizzaJson.map((item , index) => {

let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)

document.querySelector('.pizza-area').append(pizzaItem)


//Colocando os dados de cada pizza
pizzaItem.querySelector('.pizza-item--img img ').src = item.img
pizzaItem.querySelector('.pizza-item--price ').innerHTML = `R$ ${item.price.toFixed(2)}`
pizzaItem.querySelector('.pizza-item--name ').innerHTML = item.name
pizzaItem.querySelector('.pizza-item--desc ').innerHTML = item.description

//pizza clicada
pizzaItem.querySelector('.pizza-item a ').addEventListener('click' , (e) => {
    e.preventDefault()
    console.log(e)
 //abrir modal
    abrirModal();
    //preenchecer
    document.querySelector('.pizzaBig   img ').src = item.img
    document.querySelector('.pizzaInfo h1').innerHTML = item.name
    document.querySelector('.pizzaInfo--desc').innerHTML = item.description
    document.querySelector('.pizzaInfo--actualPrice').innerHTML = ` R$  ${item.price.toFixed(2)} `








})

//cancelar 
botoesfechar()
// voltar modo mobile
document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click' , () => {
    document.querySelector('.pizzaWindowArea').style.display = 'none'
})





} )
