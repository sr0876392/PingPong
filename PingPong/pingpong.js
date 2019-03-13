"use strict";

let bodyParam = {
    bodyWidth: document.body.offsetWidth,
    bodyHeight: document.body.offsetHeight
}
let ball = {
    color: "background-color:rgb(0,0,0);",
    shape: "border-radius: 100%;",
    height: "height:35px;",
    width: "width:35px;",
    position: "position: absolute;",
}
let block = {
    height: "height:250px;",
    width: "width:50px;",
    color:"background-color:rgb(0,0,0);",
    position: "position: absolute;"
}

function PingBlocks (str) {
    var temp = document.createElement("div")
    temp.setAttribute("id", str);
    document.body.append(temp);
    var cssStr = block.color + block.height + block.width + block.position
    temp.style.cssText = cssStr;
    return temp
}

function placeElements() {
    var lBlock = new PingBlocks("lBlock");
    var rBlock = new PingBlocks("rBlock");
    var ballDiv = document.createElement("div");
    ballDiv.setAttribute("id", "ball");
    var cssStr = ball.color + ball.height + ball.width + ball.position + ball.shape + ` top:${bodyParam.bodyHeight/2}px;` + ` left:${bodyParam.bodyWidth/2}px;`;
    document.body.append(ballDiv);
    ballDiv.style.cssText = cssStr;
    console.log(bodyParam.bodyHeight)
    rBlock.style.right = "5px";
    lBlock.style.left = "5px";

}
function play(){
    var step = 5;
    var lBlock = document.getElementById("lBlock");
    var lBlockPos =+ step;
    var rBlock = document.getElementById("rBlock");  
    var ball = document.getElementById("ball");
    rBlock.style.top = `${lBlockPos}px`;
    lBlock.style.top = `${bodyParam.bodyHeight / 2 - 125 + step}px`;

    document.addEventListener("keydown", function(key){
        if (key.keyCode == "87"){
            step = -5;
            console.log("W pressed")
        }
    })
    requestAnimationFrame(play);
}

function start(){
    var button = document.getElementById("button");
    button.addEventListener("click", function(){
        button.style.display = "none";
        play()
    })
}
function main(){
    placeElements()
    start()
}
main()