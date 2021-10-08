var op=1;
var load=true;
var c=0;
function logoopacity(){
if(op==1){
w3.opacity="0.3";
w4.opacity="0.5";
w2.opacity="0.2";
w1.opacity="1";
op=2;
}else if(op==2){
w4.opacity="0.2";
w3.opacity="0.3";
w1.opacity="0.5";
w2.opacity="1";
op=3;
}else if(op==3){
w4.opacity="0.2";
w1.opacity="0.3";
w2.opacity="0.5";
w3.opacity="1";
op=4;
}else if(op==4){
w1.opacity="0.1";
w2.opacity="0.2";
w3.opacity="0.5";
w4.opacity="1.0";
op=1;
}
if(load==false){
if(c==4){
clearInterval(id);
document.getElementById("logo").style.WebkitAnimationName="byelogo";
document.getElementById("logo").style.WebkitAnimationDuration="3s";
document.getElementById("wait1").style.WebkitAnimationName="byewait";
document.getElementById("wait1").style.WebkitAnimationDuration="3s";
document.getElementById("wait2").style.WebkitAnimationName="byewait";
document.getElementById("wait2").style.WebkitAnimationDuration="3s";
document.getElementById("wait3").style.WebkitAnimationName="byewait";
document.getElementById("wait3").style.WebkitAnimationDuration="3s";
document.getElementById("wait4").style.WebkitAnimationName="byewait";
document.getElementById("wait4").style.WebkitAnimationDuration="3s";
document.getElementById("mainframe").style.WebkitAnimationName="welcome";
document.getElementById("mainframe").style.WebkitAnimationDuration="3s";
setTimeout('end()',3000);
}else{
c+=1;
}
}
}
function end(){
document.getElementById("logo").style.visibility="hidden";
document.getElementById("wait1").style.visibility="hidden";
document.getElementById("wait2").style.visibility="hidden";
document.getElementById("wait3").style.visibility="hidden";
document.getElementById("wait4").style.visibility="hidden";
document.getElementById("mainframe").style.WebkitAnimationName="welcome2";
document.getElementById("mainframe").style.WebkitAnimationDuration="3s";
document.getElementById("mainframe").style.backgroundImage="url('pic/back.webp')";
document.getElementById("mainframe").style.backgroundAttachment="fixed";
document.getElementById("mainframe").style.backgroundPosition="center top";
document.getElementById("mainframe").style.backgroundSize="99%";
document.getElementById("mainframe").style.height="2000px";
document.getElementById("content1").style.WebkitAnimationName="viewcontent";
document.getElementById("content1").style.WebkitAnimationDuration="5s";
document.getElementById("content1").style.opacity="1";
document.getElementById("content2").style.WebkitAnimationName="viewcontent";
document.getElementById("content2").style.WebkitAnimationDuration="6s";
document.getElementById("content2").style.opacity="1";
document.getElementById("content3").style.WebkitAnimationName="viewcontent";
document.getElementById("content3").style.WebkitAnimationDuration="7s";
document.getElementById("content3").style.opacity="1";
document.getElementById("content4").style.WebkitAnimationName="viewcontentend";
document.getElementById("content4").style.WebkitAnimationDuration="5s";
document.getElementById("content4").style.opacity="1";
document.getElementById("button").style.WebkitAnimationName="viewcontentend";
document.getElementById("button").style.WebkitAnimationDuration="5s";
document.getElementById("button").style.opacity="1";
}
function toend(){
load=false;
}
var body=document.getElementById('mainframe');
body.style.backgroundColor = 'black'; 
var logo=document.getElementById('logo');
logo.style.visibility='visible';
var w1=document.getElementById("wait1").style;
var w2=document.getElementById("wait2").style;
var w3=document.getElementById("wait3").style;
var w4=document.getElementById("wait4").style;
var id=setInterval('logoopacity()',500);