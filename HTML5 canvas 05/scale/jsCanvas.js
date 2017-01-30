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

//x축 두배
ctx.scale(2,1);

// 빨간 사각형
ctx.fillStyle = "red";
ctx.fillRect(100,100,50,50);
}
