

console.log("Child process created",process.pid)

process.on("message",(msg)=>{
    console.log("Child process received message",msg)
    const result = getRandomNumbers(msg)
    process.send(result)


})

function getRandomNumbers(quantity){
    const numbers = []
    for (let i = 0; i < quantity; i++) {
        numbers.push(Math.floor(Math.random()*1000)+1)    
    }
    const counter = numbers.reduce((acc,num)=>{
        acc[num] = (acc[num]||0)+1;
        return acc
    },{})
    return counter
}

export default getRandomNumbers