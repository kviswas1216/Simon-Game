let gameseq=[];
let userseq=[];
let btnarr=["red","yellow","green","purple"];
let started =false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started");
        started=true;
        levelup();
    }
})

function gameflash(btn){
    btn.classList.add("flash");//create the class in css and adding it here
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${ level}`

    //random button During initial flashing randmm button flashes
    let randIdx=Math.floor(Math.random()*3)
    let randcolor=btnarr[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);//initial adding of intial random color into seq
    console.log(gameseq);
    gameflash(randbtn);

}



function checkAns(idx){
    
    //console.log("curr level ",level);
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
     
    }else{
        h2.innerHTML=`Game Over! your score is <b>${level*10}<b> <br> press any key to start`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }

}

//Event Listeners

function btnPress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute('id' );//getting id of button pressed
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function  reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}



