var colors=[],x,selectedColor;
var boxes=document.querySelectorAll('.box');
var correct=document.getElementById('correct');
var wrong=document.getElementById('wrong');
function selectColor(){
  selectedColor = colors[Math.floor(Math.random()*6)];
  document.getElementById('head').innerHTML=selectedColor;
}
function generateAndApplyColors(){
  for(var i=0;i<6;i++){
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    var color = 'rgb('+r+', '+g+', '+b+')';
    colors[i]=color;
    boxes[i].style.backgroundColor=colors[i];
  }
}
function listenBoxes(){
  for(var i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",function(e){
      var clickedColor = this.style.backgroundColor;
      if(selectedColor==clickedColor){
        document.getElementsByClassName('container')[0].style.display="none";
        correct.style.display="block";
        wrong.style.display="none";
      }
      else {
        document.getElementsByClassName('container')[0].style.display="none";
        correct.style.display="none";
        wrong.style.display="block";
      }
	});
  }
}
generateAndApplyColors();
selectColor();
listenBoxes();
