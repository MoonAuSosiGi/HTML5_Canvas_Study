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
  ctx.fillStyle = "#9C9C9C"
  ctx.fillRect(0,0,512,256);

  ctx.fillStyle = "#ff0000"; // color RED
  ctx.fillRect(10,10,50,50);

  // drw Text
  ctx.fillStyle = "#000000"; // black
  ctx.font = "15px _sans";
  ctx.textBaseline="top"; // 폰트 수직 정렬 방법
  ctx.fillText("fillRect 10,10 위치에 50,50 사이즈로 빨간 사각형 그리기",10,80);

}
