let aceitar = true //vai decidir se vai dar rejeitar ou resolver

console.log('pedir uber');//começo

const promessas = new Promise((rejeita,resolver) => {
    if(aceitar){
        return resolver('o carro chego ')
    }
    return rejeita('Pedido negado')


});
console.log('aguardando')
promessas.then(resolver => console.log(resolver)).
catch(Error => console.log(Error)).
finally(() => console.log('Finalizada'))