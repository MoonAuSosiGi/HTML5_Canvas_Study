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

// 배경 그리기
ctx.fillStyle = "gray";
ctx.fillRect(0,0,512,300);

//단위 행렬 세팅
// setTransform( a, b, c, d , e, f)
//   a c e
//  [b d f ]
//   0 0 1
ctx.setTransform(1,0,0,1,0,0);

// 원점 이동
ctx.translate(125,125);

// 회전
ctx.rotate(45 * Math.PI/180);

// 빨간 사각형
// 원점이 125,125 이므로 0,0 위치에 그리면 됩니다.
ctx.fillStyle = "red";
ctx.fillRect(-25,-25,50,50);
}
