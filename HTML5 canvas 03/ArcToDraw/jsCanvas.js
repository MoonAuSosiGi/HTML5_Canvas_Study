function canvasSupport(){
  if(!document.getElementById("canvas") || !document.getElementById("canvas").getContext)
    return false;
  return true;
}

function canvasMain(){
  if(!canvasSupport())
    return ;
  var mcanvas = document.getElementById("canvas");
  var ctx = mcanvas.getContext("2d");
  drawScene(ctx);
}

function drawScene(ctx){
  ctx.fillStyle = "gray";
  ctx.fillRect(0,0,512,300);

  ctx.strokeStyle="black";
  ctx.lineWidth = 5;


  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(200,128);
  ctx.arcTo(100,128,250,200,20);
  ctx.stroke();
  ctx.closePath();


}
