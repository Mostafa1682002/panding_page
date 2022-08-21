let curentImg=document.querySelector(".imgs img");
let body=document.querySelector("body");


curentImg.src= window.localStorage.getItem("imgeSrc");
body.style.backgroundColor=window.localStorage.getItem("color");

let allIcon=document.querySelectorAll(".icons img");

allIcon.forEach((e)=>{
    e.onclick=function(ele){
        //change src current Img
        curentImg.src= ele.target.src;
        //change LocalSrorage imgSrc
        window.localStorage.imgeSrc=`${ele.target.src}`;
        //change LocalStorage Color
        window.localStorage.color=`${ele.target.dataset.color}`;
        //change Backgroun-Color from body
        body.style.backgroundColor=ele.target.dataset.color;
    }
})

