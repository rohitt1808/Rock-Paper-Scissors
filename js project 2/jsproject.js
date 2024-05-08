























































































let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const score_user=document.querySelector("#score-user");
const score_comp=document.querySelector("#score-comp");
const reset=document.querySelector("#reset-btn");
const comp=()=>{
    const arr=["rock","paper","scissors"];
    const x=Math.floor(Math.random()*3);
    return arr[x];

}
const resetgame = () => {
    user_score = 0;
    comp_score = 0;
    enableboxes(); 
    user(user_score);
    computer_score(comp_score);
    msg.innerText="PLAY YOUR MOVE!";
    msg.style.backgroundColor="#081b31";
}

  const disabledboxes=()=>{
    for(box of choices){
        box.disabled=true;
    }
  }
  const enableboxes=()=>{
    for(box of choices){
        box.disabled=false;
    }
}
const draw_game=(draw_flag)=>{
    if(draw_flag===true){
    msg.innerText="GAME IS DRAWN! PLAY AGAIN";
    msg.style.backgroundColor="#081b31";
}
}
const showWinner=(flag,choiceid,computer)=>{
    const x=choiceid.toUpperCase();
    const y=computer.toUpperCase();

   
    if(flag===true){
        msg.innerText=`YOU WON! YOUR ${x} BEATS ${y}`;
        msg.style.backgroundColor="green";
    }
    else if(flag===false){
        msg.innerText=`YOU LOST!  ${y} BEATS YOUR ${x}`;
        msg.style.backgroundColor="red";

    
    }
}
const user=(user_score)=>{
    score_user.innerText=`${user_score}`;

}
const computer_score=(comp_score)=>{
    score_comp.innerText=`${comp_score}`;
}
const playgame=(choiceid)=>{
  const computer=comp();
  const a=choiceid.toUpperCase();
  const b=computer.toUpperCase();
  console.log(`USER CHOICE IS ${a}`);
  console.log(`COMPUTER CHOICE IS ${b}`);
  flag=false;
  draw_flag=false;
  if(choiceid==='rock' && computer==='scissors' ){
    ++user_score;
    flag=true;
  }
  if(choiceid==='paper' && computer==='rock'){
    ++user_score;
    flag=true;
  }
  if(choiceid==='scissors' && computer==='paper'){
    ++user_score;
    flag=true;
  }
  if(choiceid==='rock' && computer==='paper'){
    ++comp_score;
    flag=false;
  }
  if(choiceid==='paper' && computer==='scissors'){
    ++comp_score;
    flag=false;
  }
  if(choiceid==='scissors' && computer==='rock'){
    ++comp_score;
    flag=false;
  }
  if(choiceid==='rock' && computer==='rock'){
    draw_flag=true;
  }
  if(choiceid==='paper' && computer==='paper'){
    draw_flag=true;
  }
  if(choiceid==='scissors' && computer==='scissors'){
    draw_flag=true;
  }
console.log(`USER SCORE IS ${user_score}`);
console.log(`COMPUTER SCORE IS ${comp_score}`);
user(user_score);
computer_score(comp_score);

if(draw_flag===true){
draw_game(draw_flag);
}
else if(flag){
    showWinner(flag,choiceid,computer);
}
else{
    showWinner(flag,choiceid,computer);
} 
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    })
})
reset.addEventListener("click",resetgame)
