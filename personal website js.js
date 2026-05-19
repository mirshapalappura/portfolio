const text="FULL STACK DEVELOPER";
const el=document.getElementById("typewriter");
let i=0;
function type(){
    if(i<text.length){
        el.textContent+=text[i];
        i++;
        setTimeout(type,100);
    }
    else{
        setTimeout(function(){
            el.textContent="";
            i=0;
            type();
        },1000);
    }
}

window.onload=function(){
    type();
    document.querySelector('.wave-fill').setAttribute('fill', '#ffe4c4');
}


window.addEventListener('scroll',function(){
    const scrollY=window.scrollY;
    const mainDiv=document.querySelector('.main');
    // const totalHeight=document.body.scrollHeight-window.innerHeight;
    const mainHeight=mainDiv.offsetHeight;
    const progress=scrollY/mainHeight;
    const startR=255, startG=228, startB=196;
    const endR=224, endG=192, endB=150;
    const r = Math.round(startR + (endR - startR) * progress);
    const g = Math.round(startG + (endG - startG) * progress);
    const b = Math.round(startB + (endB - startB) * progress);
    const color =`rgb(${r},${g},${b})`;
    document.querySelector('.wave-fill').setAttribute('fill',color);
});




