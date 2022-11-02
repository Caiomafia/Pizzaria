const questions = [
    "O que aprendi hoje ?",
    "O que me deixo aborrecido? O que eu poderia fazer para melhorar",
    "O que me deixo feliz hoje ?",
    "Quantas pessoas ajudei hoje ?",
]
const ask = (index = 0 ) => {
    process.stdout.write( "\n\n" + questions[index] + ">")
}

ask()

const answes = []

process.stdin.on("data" , data => {
    answes.push(data.toString().trim())
    if(answes.length < questions.length){
    ask(answes.length)   
    }
else{
    console.log(answes)
    process.exit()
}
})


process.on('exit' ,() => {

console.log(`

Bem vindo Caio 

-O que você aprendeu hoje foi 
*${answes[0]}


-Você acha que pode melhorar nesse quesitos 
*${answes[1]}


-Você disse que fico feliz por causa disso
*${answes[2]}


-Você disse que ajudo 
*${answes[3]} pessoas `)
 






})