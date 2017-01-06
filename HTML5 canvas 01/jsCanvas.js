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
  // background Color
  ctx.fillStyle = "#ffffaa"; // color Yellow
  ctx.fillRect(0,0,512,256);

  // draw Text
  ctx.fillStyle = "#000000"; // black
  ctx.font = "20px _sans";
  ctx.textBaseline="top"; // 폰트 수직 정렬 방법
  ctx.fillText("Hello World!",195,80);

}
