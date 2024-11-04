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

function levelup(){
    level++;
    h2.innerText=`level ${ level}`


    //random button
    let randIdx=Math.floor(Math.random()*3)
    let randcolor=btnarr[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    btnflash(randbtn);

}

function btnflash(btn){
    btn.classList.add("flash");//create the class in css and adding it here
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}