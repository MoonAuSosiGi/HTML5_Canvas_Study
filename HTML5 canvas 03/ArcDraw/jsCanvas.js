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

  // 반지름 20의 원을 그립니다.
  ctx.beginPath();
  ctx.arc(256, 64, 20, 0,(Math.PI/180) * 360, false);
  ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.font="15px _sans";
  ctx.fillText("반지름 20을 가진 원을 그립니다.", 148,100);

  //1/4 만큼의 원호를 그립니다.
  ctx.beginPath();
  ctx.arc(256, 120, 20, 0, (Math.PI/180) * 90, false);
  ctx.stroke();
  ctx.closePath();
  ctx.fillText("1/4 만큼의 원호를 그립니다.",158,160);

  //1/4 만큼의 원호를 그립니다.
  ctx.beginPath();
  ctx.arc(256, 200, 20, 0, (Math.PI/180) * 270, false);
  ctx.stroke();
  ctx.closePath();
  ctx.fillText("3/4 만큼의 원호를 그립니다.",158,260);

}
