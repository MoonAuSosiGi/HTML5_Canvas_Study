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

// 겹치기 효과를 확인할 용도의 사각형을 그립니다.
ctx.fillStyle = "gray";
ctx.fillRect(40,40,200,200);

//globalCompositeOperation값은 그대로 둡니다 - 이 경우 source-over
//빨간 사각형을 그립니다.
ctx.fillStyle = "red";
ctx.fillRect(20,20,50,50);

ctx.font = "15px _sans";
ctx.fillText("source-over", 80,30);


// copy - 이 경우 destination 과 겹치면 source만 그리므로 destination 이 사라집니다.
//ctx.globalCompositeOperation = "copy";
//ctx.fillStyle = "pink";
//ctx.fillRect(20,180,50,50);

//ctx.globalCompositeOperation = "source-over";
//ctx.fillStyle = "black";
//ctx.fillText("copy",80,200);

// destination-atop
// 겹친 부분에서는 destination 부분을 출력하고 안 겹친 부분에선 source (불투명할경우) 를 그리고
// 나머지는 투명하게 처리됩니다.
//ctx.globalCompositeOperation = "destination-atop";
//ctx.fillStyle = "green";
//ctx.fillRect(20,200,50,50);

//ctx.globalCompositeOperation = "source-over";
//ctx.fillText("destination-atop",80,220);


// destination-in
// 겹친 부분에 destination 부분을 그리며 (즉 source 와 destination이 겹칠 경우 destination 을 그립니다)
// 나머지는 투명하게 처리됩니다.
//ctx.globalCompositeOperation = "destination-in";
//ctx.fillStyle = "yellow";
//ctx.fillRect(20,200,50,50);

//ctx.globalCompositeOperation = "source-over";
//ctx.fillStyle = "black";
//ctx.fillText("destination-in",80,220);


// destination-out
// destination 이 불투명하고 source 가 투명한 부분에 한정해서 destination 을 출력
// 현재로썬 투명값이 없으므로 그 부분만 비어있게 보이게 됩니다.
//ctx.globalCompositeOperation = "destination-out";
//ctx.fillStyle = "black";
//ctx.fillRect(20,200,50,50);

//ctx.globalCompositeOperation = "source-over";
//ctx.fillText("destination-out",80,220);


// lighter 겹친 부분은 색상을 더합니다.
ctx.globalCompositeOperation = "lighter"
ctx.fillStyle = "blue";
ctx.fillRect(180,20,50,50);
ctx.fillText("lighter",240,30)

// source-atop
// 겹친 부분만 source 를 출력
ctx.globalCompositeOperation = "source-atop";
ctx.fillStyle = "green";
ctx.fillRect(20,80,50,50);
ctx.fillText("source-atop",80,100);

// source-in
//겹친 부분만 source 를 출력하고 나머지는 투명하게 처리합니다.
//ctx.globalCompositeOperation = "source-in";
//ctx.fillStyle = "pink";
//ctx.fillRect(20,200,50,50);

//ctx.globalCompositeOperation = "source-over";
//ctx.fillStyle = "black";
//ctx.fillText("source-in",80,220);

// source-out
// 겹치지 않은 부분만 source 를 출력하고 나머지는 투명하게 처리합니다.
//ctx.globalCompositeOperation = "source-out";
//ctx.fillStyle = "pink";
//ctx.fillRect(20,200,50,50);

//ctx.globalCompositeOperation = "source-over";
//ctx.fillStyle = "black";
//ctx.fillText("source-out",80,220);

// xor
// 서로 겹치는 부분은 xor 연산합니다.
ctx.globalCompositeOperation = "xor";
ctx.fillStyle = "yellow";
ctx.fillRect(20,140,50,50);

ctx.globalCompositeOperation = "source-over";
ctx.fillText("xor",80,160);

// globalAlpha
ctx.globalAlpha = 0.5;
ctx.globalCompositeOperation = "source-atop";
ctx.fillRect(200,80,50,50);

ctx.globalCompositeOperation = "source-over";
ctx.fillStyle = "black";
ctx.fillText("source-atop + globalAlpha",260,100);
}
