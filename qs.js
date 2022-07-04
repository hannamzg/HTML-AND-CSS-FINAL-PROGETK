class qsPoons{
    constructor(
      theQs,
      firstQs,
      scondQs,
      therthQs,
      answer,
    )
    {
      this.theQs = theQs;
      this.firstQs =firstQs;
      this.scondQs =scondQs;
      this.therthQs =therthQs;
      this.answer =answer;
    }
  }
  
  let qsList=[
    new qsPoons("what is 2+2", "4" ,"3","2","4"),
    new qsPoons("what is 4+4" ,"8","3","1","8"),
    new qsPoons("what is 3+3" , "4" ,"1","6","6"),
    new qsPoons("what is 10/10" , "10" ,"2" ,"1" ,"1"),
    new qsPoons("what is 10*10?","10", "100","1","100"),
  
  
    new qsPoons("what is 1*1?","1", "11","111","1"),
    new qsPoons("what is 21+2?","2", "23","11","23"),
    new qsPoons("what is 7+7?","103", "14","12","14"),
    new qsPoons("what is 9+9?","18", "10","13","18"),
    new qsPoons("what is 5+5?","3", "10","1","10"),
  
  
    
  ]
  let container  = document.getElementById('container');
  let checkButton = document.getElementById('checkButton');
  
  renderQuestions();
  checkButton.addEventListener("click" , checkAnswer);
  
  
  function renderQuestions(){
    container.innerHTML =""
    for(let i = 0; i<qsList.length; i++){
      let creatDiv = document.createElement("div");
      let creatH1 = document.createElement('h1');
      let ceaatDivQs1 =document.createElement("div");
      let ceaatDivQs2 =document.createElement("div");
      let ceaatDivQs3 =document.createElement("div");
      let creatinput1 =document.createElement('input');
      let creatinput2 =document.createElement('input');
      let creatinput3 =document.createElement('input');
      let creatPText1= document.createElement('span');
      let creatPText2= document.createElement('span');
      let creatPText3= document.createElement('span');
  
      creatDiv.classList.add("soso")
      creatH1.innerHTML = qsList[i].theQs
      ;
      creatinput1.setAttribute("type","radio");
      creatinput2.setAttribute("type","radio");
      creatinput3.setAttribute("type","radio");
      creatinput1.setAttribute("value" , qsList[i].firstQs);
      creatinput2.setAttribute("value" , qsList[i].scondQs);
      creatinput3.setAttribute("value" , qsList[i].therthQs);
      creatinput1.setAttribute("name" , i);
      creatinput2.setAttribute("name" , i);
      creatinput3.setAttribute("name" , i);
      creatPText1.innerHTML = qsList[i].firstQs;
      creatPText2.innerHTML = qsList[i].scondQs;
      creatPText3.innerHTML = qsList[i].therthQs;
  
      ceaatDivQs1.appendChild(creatinput1);
      ceaatDivQs1.appendChild(creatPText1);
  
      ceaatDivQs2.appendChild(creatinput2);
      ceaatDivQs2.appendChild(creatPText2);
  
      ceaatDivQs3.appendChild(creatinput3);
      ceaatDivQs3.appendChild(creatPText3);
  
      creatDiv.appendChild(creatH1);
      creatDiv.appendChild(ceaatDivQs1);
      creatDiv.appendChild(ceaatDivQs2);
      creatDiv.appendChild(ceaatDivQs3);
      container.appendChild(creatDiv)
  
      
    }
  }
  
  function checkAnswer(){
    let score = 0;
    for(let i=0; i<qsList.length; i++){
      let options = document.getElementsByName(i);
      for( let j=0; j<options.length; j++){
        if(options[j].checked && options[j].value == qsList[i].answer){
          score++;
          break;
  
        }
      }
    }
    if(score>7){
      alert("wow you are so smart")
    }
    else{
      alert(":) try agin")
    }
    alert("your score is " + score + "/" + qsList.length)
  }