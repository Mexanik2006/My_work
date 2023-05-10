let clock=document.querySelector('.clock');
let hour=document.getElementById('hours');
let min=document.getElementById('minutes');
let secund=document.getElementById('seconds');
let timeStatus=document.getElementById('timeStatus');

function clockFunc(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    hour.innerHTML=h<10?'0'+h:h;
    min.innerHTML=m<10?'0'+m:m;
    secund.innerHTML=s<10?'0'+s:s;
}
clockFunc();
setInterval(clockFunc,1000)