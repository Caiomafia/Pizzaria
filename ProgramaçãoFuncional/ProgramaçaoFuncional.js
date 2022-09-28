// funçoes independente

const factorial = x => {
    if(x===0){
        return 1;
    }

return x * factorial(x-1);

}

console.log(factorial(10))
//não devera ter loops 
//ter pelo menos um argumento 
//deve retornar algo 
//não pode alterar alog de dentro para fora 

/*     {FUNCAO PURA()}
    não depende de dado externo 
    não pode sofreer alteração de fora 
*/

//funçao impura * precisa de dados externos
 function calcularcirculo(radius){
    return Math.PI * (radius*radius)
 }


 // funçao pura 

const caclularcirculos = function(radius,pi){
    return pi*(radius*radius)
}





 //arrow function
 /*
 const calcular = (radius,pi) =>{
    return pi*(radius*radius)
 }

 const sn = () => {console.log('mafra')}
 const id = () => { console.log(18)}

 const mn = () =>{console.log('meu nome')}
 const falar = (mn,sn,id) => {mn() , sn() , id()   }
 falar()
*/

const numbers = [2,3,4,5,6]

const square = (n) => {n * n }

const squarenumber = numbers.map(square)
//squarenumber
