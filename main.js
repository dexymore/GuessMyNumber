

 let EliteNum=Math.trunc(Math.random() * 20)+1
let score=10
let highscore=0
console.log(EliteNum)




document.querySelector('.check').addEventListener(
    'click',function(){
const regNum=Number(document.querySelector('.guess').value)

if(!regNum)
{
    document.querySelector('.message').textContent="please enter a number 😒"
}
else if(regNum>20||regNum<0)
{
    document.querySelector('.message').textContent="please enter a valid number 🤬"
}     
else if(regNum === EliteNum){
        document.querySelector('.number').innerHTML=EliteNum
    
    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width='28rem'
    document.querySelector('.message').textContent="yaaay you winn 🥳🥳"
if(score>highscore)
{
    highscore=score
document.querySelector('.highscore').innerHTML=highscore
}

}
    
else if(regNum>EliteNum)
{
    document.querySelector('.message').textContent="the number is too high 😜"
score--
document.querySelector('.score').textContent=score
if(score===0)
{
    document.querySelector('.message').textContent="unfortunately you lost ☹️"
score=11
}

}

else if(regNum<EliteNum)
{
    document.querySelector('.message').textContent="the number is too low 😢"
score--
document.querySelector('.score').textContent=score
if(score===0)
{
    document.querySelector('.message').textContent="unfortunately you lost ☹️"
score=11
}

}
 


}
    )


    document.querySelector('.again').addEventListener(
    'click',function(){

score=10;
EliteNum=Math.trunc(Math.random()*20)+1

document.querySelector('.score').textContent=score
document.querySelector('.message').textContent="Start guessing..."
document.querySelector('body').style.backgroundColor='#222' 
document.querySelector('.number').style.width='15rem'
document.querySelector('.number').textContent='?'
document.querySelector('.guess').value=''


}
    )