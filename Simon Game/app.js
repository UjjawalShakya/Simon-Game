if (typeof document !== 'undefined') {
 let gameSeq=[];
 let userSeq=[];
 let start=false;
 let level=0; 
 let colors=["red","green","blue","pink"];

 let h2=document.querySelector("h2");
 let body=document.querySelector("body");
 document.addEventListener("keypress", function(){
  if(start==false){
   console.log("Game is started");
   start=true;
  }
  levelup();
 })

 function levelup(){
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;
  let idx=Math.floor(Math.random()*3);
  let ranColor=colors[idx]; 
  let randbtn=document.querySelector(`.${ranColor}`);
  gameSeq.push(ranColor);
  console.log(`Game seq ${gameSeq}`);
  btnFlash(randbtn);
 }

 function check(idx){
  if(userSeq[idx]==gameSeq[idx]){
   if(userSeq.length==gameSeq.length){
    setTimeout(levelup,1000);
   }
  }
  else{
   h2.innerHTML=`Game Over! Your Score is <b>${level-1}</b> <br>Press any key to start.`;
   body.style.backgroundColor="red";
   setTimeout(function(){
    body.style.backgroundColor="white";
   },400)
   reset();
  }
 }

 function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
   btn.classList.remove("flash");
  },250)
 }

 function btnpress(){
  let btn=this;
  btnFlash(btn); 
  let userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(`User seq ${userSeq}`);
  check(userSeq.length-1);
 }

 let btnall=document.querySelectorAll(".btn");
 for(btn of btnall){
  btn.addEventListener("click",btnpress);
 }

 function reset(){
  start=false;
  gameSeq=[];
  userSeq=[];
  level=0; 
 }

}