var b=document.body,S=[].slice.call(document.querySelectorAll("section")),i=0;
function show(){S.forEach(function(s,k){s.classList.toggle("on",k===i)});
document.getElementById("pos").textContent=b.classList.contains("slide")?(i+1)+" / "+S.length:"课后阅读版";
if(b.classList.contains("slide"))window.scrollTo(0,0)}
function go(d){if(b.classList.contains("slide")){i=Math.max(0,Math.min(S.length-1,i+d));show()}}
document.addEventListener("keydown",function(e){if(["ArrowRight","PageDown"," "].indexOf(e.key)>-1){e.preventDefault();go(1)}if(["ArrowLeft","PageUp"].indexOf(e.key)>-1)go(-1)});
document.getElementById("tg").onclick=function(){var s=b.classList.toggle("slide");this.textContent=s?"切换：课后阅读模式":"切换：课堂幻灯片模式";show()};
document.getElementById("th").onclick=function(){var r=document.documentElement,d=matchMedia("(prefers-color-scheme:dark)").matches;var cur=r.getAttribute("data-theme")||(d?"dark":"light");r.setAttribute("data-theme",cur==="dark"?"light":"dark")};
b.addEventListener("click",function(e){if(b.classList.contains("slide")&&e.target.tagName!=="BUTTON")go(1)});
show();
var exBtn=document.createElement("button");exBtn.id="ex";exBtn.textContent="全部展开";
exBtn.onclick=function(){var ds=[].slice.call(document.querySelectorAll("details.ext"));var open=ds.some(function(d){return !d.open});ds.forEach(function(d){d.open=open});this.textContent=open?"全部收起":"全部展开"};
document.querySelector("header span:last-child").insertBefore(exBtn,document.getElementById("th"));
var fsBtn=document.createElement("button");fsBtn.id="fs";fsBtn.textContent="全屏";
fsBtn.onclick=function(){if(document.fullscreenElement){document.exitFullscreen()}else if(document.documentElement.requestFullscreen){document.documentElement.requestFullscreen()}};
document.querySelector("header span:last-child").appendChild(fsBtn);
document.addEventListener("fullscreenchange",function(){fsBtn.textContent=document.fullscreenElement?"退出全屏":"全屏"});

/* 灯箱：所有包在 <a> 里的 <img> 点击放大预览，Esc 关闭，←→ 切换同页图片 */
var lb=document.createElement("div");lb.id="lb";lb.innerHTML='<button id="lbp" aria-label="上一张">‹</button><img><button id="lbn2" aria-label="下一张">›</button>';
document.body.appendChild(lb);var lbi=lb.querySelector("img");
var lbpBtn=lb.querySelector("#lbp"),lbnBtn=lb.querySelector("#lbn2");
var lbn=[];var lbi_=0;  /* 当前页图片链接列表与索引 */
function lbCur(section){return [].slice.call(section.querySelectorAll("a img")).map(function(im){return im.parentNode.getAttribute("href")}).filter(function(h){return /\.(png|jpe?g|gif|webp|svg)$/i.test(h)})}
function lbShow(){if(lbn.length){lbi_=Math.max(0,Math.min(lbn.length-1,lbi_));lbi.src=lbn[lbi_];lbi.style.zoom=""}}
function lbClose(){lb.classList.remove("on");lbi.src="";lbi.style.zoom="";lbn=[]}
lb.onclick=function(e){if(e.target!==lbi)lbClose();e.stopPropagation()};
lbpBtn.onclick=function(e){e.stopPropagation();lbi_--;lbShow()};
lbnBtn.onclick=function(e){e.stopPropagation();lbi_++;lbShow()};
document.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("a"):null;
if(a&&a.querySelector("img")&&/\.(png|jpe?g|gif|webp|svg)$/i.test(a.getAttribute("href"))){e.preventDefault();e.stopPropagation();var s=a.closest("section");lbn=lbCur(s||document);lbi_=Math.max(0,lbn.indexOf(a.getAttribute("href")));lbShow();lb.classList.add("on")}},true);
document.addEventListener("keydown",function(e){if(!lb.classList.contains("on"))return;
if(e.key==="Escape"){e.preventDefault();lbClose()}
else if(e.key==="ArrowRight"){e.preventDefault();e.stopPropagation();lbi_++;lbShow()}
else if(e.key==="ArrowLeft"){e.preventDefault();e.stopPropagation();lbi_--;lbShow()}
else if(e.key==="q"||e.key==="Q"){e.preventDefault();e.stopPropagation();lbClose()}},true);
document.addEventListener("fullscreenchange",function(){if(!document.fullscreenElement)lbClose()});
/* 触屏：双指缩放 + 单指滑动切换 */
var tx=null,sd=null,sz=1;
lb.addEventListener("touchstart",function(e){
if(e.touches.length===2){tx=null;sd=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);sz=parseFloat(lbi.style.zoom)||1}
else if(e.touches.length===1)tx=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchmove",function(e){
if(sd!==null&&e.touches.length===2){e.preventDefault();var d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);lbi.style.zoom=Math.max(1,Math.min(8,sz*d/sd))}},{passive:false});
lb.addEventListener("touchend",function(e){if(sd!==null&&e.touches.length<2){sd=null;if(parseFloat(lbi.style.zoom)<=1.01)lbi.style.zoom=""}
if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;tx=null;
if((parseFloat(lbi.style.zoom)||1)<=1&&Math.abs(dx)>40){lbi_+=dx>0?-1:1;lbShow()}},{passive:true});
