function firstpageload(){
if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
if(confirm("このサイトはパソコン版です。モバイル版へ移動しますか?")){
location.href="mobile/";
}
}
	document.getElementById("three").style.width="100%";
	document.getElementById("endcontents").style.width="100%";
	document.getElementById("fo").style.width="100%";
}
var on=true;
function openwindow(){
if(on){
document.getElementById("window").style.WebkitAnimationName="view";
document.getElementById("window").style.WebkitAnimationDuration="3s";
document.getElementById("window").style.left="0px";
on=false;
}else{
document.getElementById("window").style.WebkitAnimationName="viewbye";
document.getElementById("window").style.WebkitAnimationDuration="3s";
document.getElementById("window").style.left="100%";
on=true;
}
}
function over(){
document.getElementById("buttonL").style.WebkitAnimationName="overL";
document.getElementById("buttonL").style.WebkitAnimationDuration="1s";
document.getElementById("buttonL").style.transform="rotateZ(-13deg)";
document.getElementById("buttonR").style.WebkitAnimationName="overR";
document.getElementById("buttonR").style.WebkitAnimationDuration="1s";
document.getElementById("buttonR").style.transform="rotateZ(13deg)";
}
function out(){
document.getElementById("buttonL").style.WebkitAnimationName="outL";
document.getElementById("buttonL").style.WebkitAnimationDuration="1s";
document.getElementById("buttonL").style.transform="rotateZ(30deg)";
document.getElementById("buttonR").style.WebkitAnimationName="outR";
document.getElementById("buttonR").style.WebkitAnimationDuration="1s";
document.getElementById("buttonR").style.transform="rotateZ(-30deg)";
}

function scrollcheckmain(){
if(window.pageYOffset>169){
document.getElementById("header").style.WebkitAnimationName="headerbye";
document.getElementById("header").style.WebkitAnimationDuration="3s";
document.getElementById("header").style.top="-60px";
}else{
document.getElementById("header").style.WebkitAnimationName="headercome";
document.getElementById("header").style.WebkitAnimationDuration="1s";
document.getElementById("header").style.top="0px";
}
if(window.pageYOffset>190){
document.getElementById("header2").style.WebkitAnimationName="headercome";
document.getElementById("header2").style.WebkitAnimationDuration="1s";
document.getElementById("header2").style.top="0px";
}else{
document.getElementById("header2").style.WebkitAnimationName="headerbye";
document.getElementById("header2").style.WebkitAnimationDuration="3s";
document.getElementById("header2").style.top="-60px";
}
}
function scroll(){
setInterval("scrollcheckmain()",500);
}
function scrollgo(positionY){
scrollTo(0,positionY);
}