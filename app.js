let gameSeq=[];
let userSeq=[];
let hScore=[];
let randColor=["red","green","yellow","blue"];
let level=0;
let gameStart=false;
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
    if(gameStart== false){
        console.log("game started");
        gameStart=true;
        levelUp();
    }
    
});
function flash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h4.innerText=`Level ${level}`;
    let rand=Math.floor(Math.random() *3);
    let randGen=randColor[rand];
    gameSeq.push(randGen);
    console.log(gameSeq);
    let randBtn=document.querySelector(`.${randGen}`);
    flash(randBtn);
  
}
function check(ind){
    if(userSeq[ind]===gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        hScore.push(level);
        h4.innerHTML=`Game Over! Your score was <b>${level}</b>.</br>
        Highest score is ${Math.max(...hScore)},</br> press any key to restart`;
       
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white"; 
        },150);
        reset();
    }
}
function btnpress(){
    let btn=this;
    console.log(this);
    flash(btn);
    let userBtn=btn.getAttribute("id");
    userSeq.push(userBtn);
    console.log(userSeq);
    
    check(userSeq.length-1);

}
let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    level=0;
    gameStart=false;
    gameSeq=[];
    userSeq=[];

}