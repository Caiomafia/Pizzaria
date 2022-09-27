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

//      {FUNCAO PURA()}


