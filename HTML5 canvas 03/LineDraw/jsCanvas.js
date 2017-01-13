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
  // 배경색
  ctx.fillStyle = "gray";
  ctx.fillRect(0,0,512,256);

  ctx.strokeStyle = "red"; // 까만색
  ctx.lineWidth = 10;
  ctx.lineCap = 'square';

  // path 시작
  ctx.beginPath();

  //선 그리기
  ctx.moveTo(128,128);
  ctx.lineTo(384,128);

  ctx.stroke();

  // path 종료
  ctx.closePath();
}
