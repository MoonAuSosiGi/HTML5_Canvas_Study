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

  ctx.font = "15px _sans";
  ctx.textBaseline="top"; // 폰트 수직 정렬 방법

  // background Color
  ctx.fillStyle = "#9C9C9C"
  ctx.fillRect(0,0,512,256);

  ctx.strokeStyle = "#ff0000" // 테두리 RED
  // 기본 설정으로 그리기
  ctx.strokeRect(10,10,50,50);

  ctx.fillStyle = "#000000"; // black
  ctx.fillText("기본 설정",10,60);

  // 굵기 조절 후 그리기
  ctx.lineWidth = 4;
  ctx.strokeRect(180,10,50,50);

  ctx.fillStyle = "#000000"; // black
  ctx.fillText("굵기 조절 후",180,60);

  // 원래대로 되돌림 ( 굵기 )
  ctx.lineWidth = 1;

  //linejoin 속성 변경
  // 비스듬한 모서리  bevel
  ctx.lineJoin = "bevel";
  ctx.strokeRect(10,80,50,50);

  ctx.fillStyle = "#000000"; // black
  ctx.fillText("비스듬한 모서리 bevel",10,140);

  //둥근 모서리 round
  ctx.lineJoin = "round";
  ctx.strokeRect(180,80,50,50);

  ctx.fillStyle = "#000000"; // black
  ctx.fillText("둥근 모서리 round",180,140);

  // 사각 모서리 miter
  ctx.lineJoin = "miter";
  ctx.strokeRect(360,80,50,50);

  ctx.fillStyle = "#000000"; // black
  ctx.fillText("둥근 모서리 round",360,140);
}
