

/*funções auxiliares */ 
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const abrirModal = () =>{
    seleciona('.pizza-item a').style.opacity = 0
    seleciona('.pizza-item a').style.display = 'flex'
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
    document.querySelector('.pizzaWindowArea').style.display = 'flex'
    //preenchecer
    document.querySelector('.pizzaBig   img ').src = item.img
    document.querySelector('.pizzaInfo h1').innerHTML = item.name
    document.querySelector('.pizzaInfo--desc').innerHTML = item.description
    document.querySelector('.pizzaInfo--actualPrice').innerHTML = ` R$  ${item.price.toFixed(2)} `








})

//cancelar 
document.querySelector(' .pizzaInfo--cancelButton ').addEventListener('click' , (e) => {
    
   document.querySelector('.pizzaWindowArea').style.display = 'none'

})
// voltar modo mobile
document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click' , () => {
    document.querySelector('.pizzaWindowArea').style.display = 'none'
})





} )
