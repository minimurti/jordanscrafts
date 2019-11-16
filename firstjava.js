



var Portvid = document.getElementById("PortVideo"); 

var spandot0 = document.getElementById("dot0");
var spandot1 = document.getElementById("dot1");
var spandot2 = document.getElementById("dot2");
var spandot3 = document.getElementById("dot3");
var spandot4 = document.getElementById("dot4");
var spandot5 = document.getElementById("dot5");
var spandot6 = document.getElementById("dot6");


Portvid.ontimeupdate = function() {PortFunction()};






Portvid.onclick = function(){
  
  if(Portvid.currentTime > 0.1){

    Portvid.pause();

    if(Portvid.currentTime < 8.8){
      FITmodal.style.display = "block";
    }

    if(Portvid.currentTime > 8.8 && Portvid.currentTime < 15.7){
      CECmodal.style.display = "block";
    }


    if(Portvid.currentTime > 15.7 && Portvid.currentTime < 22){
      Runmodal.style.display = "block";
      if(Runvid.paused){
        RunVid.currentTime = 0;
        Runvid.play();
      }

    }
  

    if(Portvid.currentTime > 22 && Portvid.currentTime < 30){
      Aimodal.style.display = "block";
    }
    

    if(Portvid.currentTime > 30 && Portvid.currentTime < 35.6){
      Lobamodal.style.display = "block";
    }


    if(Portvid.currentTime > 35.6 && Portvid.currentTime < 41.5){
      TM4Cmodal.style.display = "block";
    }


    if(Portvid.currentTime > 41.5){
      Skatemodal.style.display = "block";

      if(Skatevid.paused){
        Skatevid.currentTime = 0;
        Skatevid.play();
      }
    

    }

  }

}



var poppy = document.getElementsByClassName("popDown")[3];
var dropped = document.getElementsByClassName("dropdown")[0];
var droppedHI = document.getElementsByClassName("droplink");

function dropdown() {
  if(dropped.style.top != "40px"){
    
    dropped.style.top = "40px";
    
    

  }
  
  else{
   
    dropped.style.top = "0px";

  }

}




function PortFunction() {
  // Display the current position of the video in a p element with id="demo"
  
  if(Portvid.currentTime < 8.8){
    spandot0.style.backgroundColor = "#888";
  }
  else{
    spandot0.style.backgroundColor = "#bbb";
  }

  if(Portvid.currentTime > 8.8 && Portvid.currentTime < 15.7){
    spandot1.style.backgroundColor = "#888";
  }
  else{
    spandot1.style.backgroundColor = "#bbb";
  }

  if(Portvid.currentTime > 15.7 && Portvid.currentTime < 22){
    spandot2.style.backgroundColor = "#888";
  }
  else{
    spandot2.style.backgroundColor = "#bbb";
  }

  if(Portvid.currentTime > 22 && Portvid.currentTime < 30){
    spandot3.style.backgroundColor = "#888";
  }
  else{
    spandot3.style.backgroundColor = "#bbb";
  }

  if(Portvid.currentTime > 30 && Portvid.currentTime < 35.6){
    spandot4.style.backgroundColor = "#888";
  }
  else{
    spandot4.style.backgroundColor = "#bbb";
  }

  if(Portvid.currentTime > 35.6 && Portvid.currentTime < 41.5){
    spandot5.style.backgroundColor = "#888";
  }
  else{
    spandot5.style.backgroundColor = "#bbb";
  }

  if(Portvid.currentTime > 41.5){
    spandot6.style.backgroundColor = "#888";
  }
  else{
    spandot6.style.backgroundColor = "#bbb";
  }
  

}

spandot0.onclick = function() {
  Portvid.currentTime = 0;
}

spandot1.onclick = function() {
  Portvid.currentTime = 8.8;
}

spandot2.onclick = function() {
  Portvid.currentTime = 15.7;
}

spandot3.onclick = function() {
  Portvid.currentTime = 22;
}

spandot4.onclick = function() {
  Portvid.currentTime = 30;
}

spandot5.onclick = function() {
  Portvid.currentTime = 35.6;
}

spandot6.onclick = function() {
  Portvid.currentTime = 41.5;
}










var bool = 0;
var runbool = 0;
var Whatvid = document.getElementsByClassName("debutVid");

var Runvid = document.getElementById("RunVid");
var Skatevid = document.getElementById("SkateVid");


// Get the modals
var modal = document.getElementsByClassName("modal");
var FITmodal = document.getElementById("FITModal");
var CECmodal = document.getElementById("CECModal");
var Runmodal = document.getElementById("RunModal");
var TM4Cmodal = document.getElementById("TM4CModal");
var Calmodal = document.getElementById("CalModal");
var Aimodal = document.getElementById("AiModal");
var Lobamodal = document.getElementById("LobaModal");
var Skatemodal = document.getElementById("SkateModal");

// Get the button that opens the modal
var FITbtn = document.getElementById("FITBtn");
var CECbtn = document.getElementById("CECBtn");
var Runbtn = document.getElementById("RunBtn");
var TM4Cbtn = document.getElementById("TM4CBtn");
var Calbtn = document.getElementById("CalBtn");
var Aibtn = document.getElementById("AiBtn");
var Lobabtn = document.getElementById("LobaBtn");
var Skatebtn = document.getElementById("SkateBtn");
var RunReloadbtn = document.getElementById("RunReload");
var SkateReloadbtn = document.getElementById("SkateReload");

// Get the <span> element that closes the modal
var spanFIT = document.getElementsByClassName("close FIT")[0];
var spanCEC = document.getElementsByClassName("close CEC")[0];
var spanRun = document.getElementsByClassName("close Run")[0];
var spanTM4C = document.getElementsByClassName("close TM4C")[0];
var spanCal = document.getElementsByClassName("close Cal")[0];
var spanAi = document.getElementsByClassName("close Ai")[0];
var spanLoba = document.getElementsByClassName("close Loba")[0];
var spanSkate = document.getElementsByClassName("close Skate")[0];


// When the user clicks the button, open the modal 
FITbtn.onclick = function() {
  FITmodal.style.display = "block";
  Portvid.pause();
  
}

CECbtn.onclick = function() {
  CECmodal.style.display = "block";
  
}

Runbtn.onclick = function() {
  Runmodal.style.display = "block";
  Portvid.pause();

  if(Runvid.paused){
    RunVid.currentTime = 0;
    Runvid.play();
  }



}

TM4Cbtn.onclick = function() {
  TM4Cmodal.style.display = "block";
  
}

Calbtn.onclick = function() {
  Calmodal.style.display = "block";
  
}

Aibtn.onclick = function() {
  Aimodal.style.display = "block";
  
}

Lobabtn.onclick = function() {
  Lobamodal.style.display = "block";
  
}


Skatebtn.onclick = function() {
  Skatemodal.style.display = "block";
  Portvid.pause();
  
  if(Skatevid.paused){
    Skatevid.currentTime = 0;
    Skatevid.play();
  }

  
    
  
  
}

RunReloadbtn.onclick = function() {
  Runvid.currentTime = 0;
  Runvid.play();
  runbool = 1;
  
  
}

SkateReloadbtn.onclick = function() {
  Skatevid.currentTime = 0;
  Skatevid.play();
  bool = 1;
  
  
}

// When the user clicks on <span> (x), close the modal
spanFIT.onclick = function() {

  for (var i=0; i<modal.length; i++) {
     modal[i].style.display = "none";
  }

  for (var i=0; i<Whatvid.length; i++) {
    Whatvid[i].pause();
  }

  Portvid.play();

}

spanRun.onclick = function() {
  for (var i=0; i<modal.length; i++) {
    modal[i].style.display = "none";
  }
  for (var i=0; i<Whatvid.length; i++) {
    Whatvid[i].pause();
  }

  Portvid.play();
}

spanCEC.onclick = function() {
  for (var i=0; i<modal.length; i++) {
    modal[i].style.display = "none";
  }
  for (var i=0; i<Whatvid.length; i++) {
    Whatvid[i].pause();
  }



  Portvid.play();
}

spanTM4C.onclick = function() {
  for (var i=0; i<modal.length; i++) {
    modal[i].style.display = "none";
  }
  for (var i=0; i<Whatvid.length; i++) {
    Whatvid[i].pause();
  }

  Portvid.play();
}

spanCal.onclick = function() {
  for (var i=0; i<modal.length; i++) {
    modal[i].style.display = "none";
  }
  for (var i=0; i<Whatvid.length; i++) {
    Whatvid[i].pause();
  }

  Portvid.play();
}

spanAi.onclick = function() {
  for (var i=0; i<modal.length; i++) {
    modal[i].style.display = "none";
  }
  for (var i=0; i<Whatvid.length; i++) {
    Whatvid[i].pause();
  }

  Portvid.play();
}

spanLoba.onclick = function() {
  for (var i=0; i<modal.length; i++) {
    modal[i].style.display = "none";
  }
  for (var i=0; i<Whatvid.length; i++) {
    Whatvid[i].pause();
  }

  Portvid.play();
}

spanSkate.onclick = function() {
  for (var i=0; i<modal.length; i++) {
    modal[i].style.display = "none";
  }
  for (var i=0; i<Whatvid.length; i++) {
    Whatvid[i].pause();
  }

  Portvid.play();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  
  for (var i=0; i<modal.length; i++) {
    if (event.target == modal[i]) {
        modal[i].style.display = "none";
        for (var j=0; j<Whatvid.length; j++) {
          Whatvid[j].pause();
        }

        Portvid.play();
      }
  }

  
  



 
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
      isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {

    for (var i=0; i<Whatvid.length; i++) {
      Whatvid[i].pause();
    }

    for (var i=0; i<modal.length; i++) {
      modal[i].style.display = "none";
    }

    
    Portvid.play();
    

  }
};
     



// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
Runvid.ontimeupdate = function() {RunFunction()};


function RunFunction() {
  // Display the current position of the video in a p element with id="demo"
  
  if(runbool !=1 && Runvid.currentTime > 4.6 ){
    Runvid.pause();
  }
  



}

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
Skatevid.ontimeupdate = function() {SkateFunction()};

function SkateFunction() {
  // Display the current position of the video in a p element with id="demo"
  

  if(bool != 1 && Skatevid.currentTime > 3.9){
    Skatevid.pause();
  }


}





