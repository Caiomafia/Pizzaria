// o clear e feito para cancelar a produção do settimer

const timer = 2000 
const finished = () => console.log(' ok!!')

let exit =  setTimeout(finished,timer)

clearTimeout(exit)