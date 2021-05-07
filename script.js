let canv = document.getElementById('canvas')
let ctx = canv.getContext("2d")

function draw(startX, startY, len, angle) {
  ctx.beginPath();
  ctx.save();
  
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();
  
  if(len < 10) {
    ctx.restore();
    return;
  }
  
  draw(0, -len, len*0.8, -15);
  draw(0, -len, len*0.8, 15);
  
  ctx.restore();
}

function draw1(startX, startY, len, angle) {
  ctx.beginPath();
  ctx.save();
  
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();
  
  if(len < 1) {
    ctx.restore();
    return;
  }
  
  //draw(0, -len, len*0.8, -15);
  draw1(0, -len, len*0.8, 90);
  
  ctx.restore();
}



function tree(){
  draw(350,600,120,0);
}

function spiral(){
  draw1(350/2,600/2,120*2,0);
}