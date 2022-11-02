// o set interval 

const timer = 1000
const checking = () => console.log('checking!')
const exit = 1500



  let stop = setInterval(checking,timer)

//forma de parar o timer e assim com clear 
 setTimeout( () => clearInterval(stop),3000 )