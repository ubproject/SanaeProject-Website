if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {} else {
if(confirm("このサイトはモバイル版です。通常版へ移動しますか?")){
location.href="http://sanae.starfree.jp/";
}
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
