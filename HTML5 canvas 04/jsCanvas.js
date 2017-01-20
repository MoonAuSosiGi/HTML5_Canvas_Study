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

// 배경
ctx.fillStyle = "gray"
ctx.fillRect(0,0,512,300);
ctx.save(); // 상태 저장
ctx.beginPath();

//0,0 을 시작점으로 하는 가로 세로 50인 사각형 영역 선택.
ctx.rect(0,0,50,50);
ctx.clip();

// 설정된 영역에 원을 그립니다. 원이 전부 표시되지 않습니다.
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(100, 100, 100, 0, (Math.PI/180) * 360, false);

// 원 그리기
ctx.stroke();
ctx.closePath();
ctx.restore(); // 상태 복구

// 전체 캔버스를 영역으로 설정
ctx.beginPath();
ctx.rect(0,0,512,300);
ctx.clip();

// 파란 원 그리기 ( 전체 영역이기 때문에 다 보입니다.)
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(100, 100, 50, 0, (Math.PI/180)*360, false);

//원 그리기
ctx.stroke();
ctx.closePath();

}
