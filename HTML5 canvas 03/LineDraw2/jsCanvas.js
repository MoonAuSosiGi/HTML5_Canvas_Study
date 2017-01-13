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
  ctx.fillRect(0,0,512,256);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
  ctx.lineJoin = "bevel";
  ctx.lineCap = "round";

  // round 끝, bevel 조인
  ctx.beginPath();
  ctx.moveTo(200,64);
  ctx.lineTo(225,64);
  ctx.lineTo(225,89);
  ctx.stroke();         // path 그리기 명령
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.font = "15px _sans";
  ctx.fillText("lineCap round, lineJoin bevel",240,80);

  // round 끝 bevel 조인
  ctx.beginPath();
  ctx.moveTo(200,114);
  ctx.lineTo(225,114);
  ctx.lineTo(225,139);
  ctx.stroke();         // path 그리기 명령
  ctx.closePath();

  ctx.fillText("lineCap round, lineJoin bevel",240,130);

  ctx.lineJoin = "round";
  ctx.lineCap = "butt";

  // butt 끝 round 조인
  ctx.beginPath();
  ctx.moveTo(200,164);
  ctx.lineTo(225,164);
  ctx.lineTo(225,189);
  ctx.stroke();         // path 그리기 명령 
  ctx.closePath();
  ctx.fillText("lineCap butt, lineJoin round",240,180);
}
