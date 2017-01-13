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


// 2차 베지어 곡선. 끝점과 제어점 하나.
  ctx.beginPath();
  ctx.moveTo(100,100);
  // 제어점 200,25 이고 끝점 100,50 이므로 오른쪽 위로 잡아 당긴 느낌의 곡선이 그려짐
  ctx.quadraticCurveTo(200,25,100,50);
  ctx.stroke();
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.font = "15px _sans";
  ctx.fillText("제어점 하나인 2차 베지어 곡선",100,25);

  ctx.beginPath();
  ctx.moveTo(400,40);
  ctx.bezierCurveTo(300,125,500,175,400,250);
  ctx.stroke();
  ctx.closePath();
  ctx.fillText("제어점 두개인 3차 베지어 곡선",200,175);
}
