// Code your solutions in this file
function writeCards(namesArray = ["Guadalupe", "Ollie", "Aki"], keyWord = "suprise"){
    let messageArray = [];
    for (let i = 0; i < namesArray.length; i++) {
       
        messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${keyWord} gift!`);
        
        
         
       
    
    }
    return messageArray;
}
console.log(writeCards());

function countDown(num){
    let counter = 0
    for (counter; counter <= num; num--){
        console.log(num);
    }
}
